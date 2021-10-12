//let idUtente = 2;

window.addEventListener("load", function(){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idUtente = urlParams.get('id');
    console.log(idUtente);

    let prenotaSalaVerde = document.querySelector("#prenotaSalaVerde");
    let prenotaSalaBlu = document.querySelector("#prenotaSalaBlu");
    let prenotaSalaRossa = document.querySelector("#prenotaSalaRossa");
    let prenotaSalaViola = document.querySelector("#prenotaSalaViola");
    let prenotaSalaGialla = document.querySelector("#prenotaSalaGialla");
    let prenotaSalaNera = document.querySelector("#prenotaSalaNera");
    let dataInizioSalaVerde = document.querySelector("#dataInizioSalaVerde");
    let dataFineSalaVerde = document.querySelector("#dataFineSalaVerde");
    let dataInizioSalaBlu = document.querySelector("#dataInizioSalaBlu");
    let dataFineSalaBlu = document.querySelector("#dataFineSalaBlu");
    let dataInizioSalaRossa = document.querySelector("#dataInizioSalaRossa");
    let dataFineSalaRossa = document.querySelector("#dataFineSalaRossa");
    let dataInizioSalaViola = document.querySelector("#dataInizioSalaViola");
    let dataFineSalaViola = document.querySelector("#dataFineSalaViola");
    let dataInizioSalaGialla = document.querySelector("#dataInizioSalaGialla");
    let dataFineSalaGialla = document.querySelector("#dataFineSalaGialla");
    let dataInizioSalaNera = document.querySelector("#dataInizioSalaNera");
    let dataFineSalaNera = document.querySelector("#dataFineSalaNera");

    let userWelcome = document.querySelector("#userWelcome");
    let userWelcomeName = document.querySelector("#userWelcomeName");
    let leMiePrenotazioni = document.querySelector("#navPrenotazioni");
    let loginbuttons = document.querySelector("#loginButtons");
    let logoutButton = document.querySelector("#buttonEsci");

    userWelcome.style.display="none";
    userWelcomeName.style.display="none";
    logoutButton.style.display="none";
    leMiePrenotazioni.style.display="none";

    if(idUtente !== "null"){
        if(idUtente !== null) {
            if (idUtente !== "") {
                userWelcome.style.display = "block";
                loginbuttons.style.display = "none";
                logoutButton.style.display="block";
                //leMiePrenotazioni.classList.remove("hidden");
                leMiePrenotazioni.style.display="block";
                console.log("Ho rimosso la classe hidden");

                //prendi il nome dell'utente dal db (tramite l'id) e stampalo nel div #userWelcomeName
                fetch('http://localhost:8080/api/get-anagrafica-by-id/' + idUtente, {
                    method: 'GET',
                }).then(res => res.json()).then(utente => { //funziona ma dovremmo ritornare un json
                    console.log("Nome utente");
                    console.log(utente.nominativo);

                    userWelcomeName.innerHTML = utente.nominativo;
                    userWelcomeName.style.display = "block";
                    logoutButton.style.display = "block";
                })
            }
        }
    }

    prenotaSalaVerde.addEventListener("click", function (e) {
        e.preventDefault();
        if(idUtente === null || idUtente === "null" || idUtente === ""){
            //se l'utente non ha effettuato l'accesso viene reindirizzato nella pagina di accesso
            alert("Verrai reindirizzato alla pagina di login");
            open("accedi.html");

        }else {

            /* qui dobbiamo prenderci:
                l'id dell'utente tramite il suo nominativo di login,
                l'id della sala che sta prenotando,
                le date di inizio e fine dall'html della pagina di prenotazione,
                inserire tutto nel database,
                mostrare un messaggio di conferma.
             */
            fetch('http://localhost:8080/api/get-sala-id-by-name/' + 'Sala Verde', {
                method: 'GET',
            }).then(res1 => res1.json()).then(idSala => {
                console.log(idSala);
                let startDate = dataInizioSalaVerde.value;
                let endDate = dataFineSalaVerde.value;

                fetch('http://localhost:8080/api/get-date-inizio-by-id-sala/' + idSala, {
                    method: 'GET',
                }).then(res2 => res2.json()).then(dataInizioDb => {
                    console.log("Data inizio db");
                    console.log(dataInizioDb);

                    fetch('http://localhost:8080/api/get-date-fine-by-id-sala/' + idSala, {
                        method: 'GET',
                    }).then(res3 => res3.json()).then(dataFineDb => {
                        console.log("Data fine db");
                        console.log(dataFineDb);


                        if (startDate !== "" && endDate !== "" && endDate >= startDate) {

                            let salaLibera = false;

                            for (var i = 0; i < dataFineDb.length; i++) {
                                if (((endDate < dataInizioDb[i]) || (endDate > dataFineDb[i]) && ((startDate < dataInizioDb[i] && endDate <dataInizioDb[i]) || (startDate > dataFineDb[i])))) {
                                    //fai la post
                                    salaLibera = true;
                                } else {
                                    salaLibera = false;
                                    console.log("La sala è già occupata");
                                    alert("Sala occupata!");
                                    break;
                                }
                            }
                            //controlla se la sala non ha mai avuto prenotazioni
                            if (dataInizioDb.length === 0 && dataFineDb.length === 0) {
                                salaLibera = true;
                            }
                            if (salaLibera) {
                                /** LA POST FUNZIONA, MA NON AGGIUNGE L'ANAGRAFICA PERCHE' VUOLE TUTTI I CAMPI DI ANAGRAFICA, E SALE */
                                console.log("FAI LA POST QUI");
                                const Data = {
                                    descrizione: document.querySelector("#descrizioneSalaVerde").value,
                                    dataInizio: startDate,
                                    dataFine: endDate
                                }

                                fetch('http://localhost:8080/api/save-prenotazione/' + idUtente + "/" + idSala, {
                                    method: 'POST',
                                    headers: {
                                        "content-type": "application/json; charset=UTF-8",
                                        "Accept": "*/*",
                                        "Accept-Encoding": "gzip,deflate,br",
                                        "Connection": "keep-live"
                                    },
                                    body: JSON.stringify(Data)
                                })
                                console.log("Prenotazione registrata con successo!");
                                alert("Prenotazione registrata con successo!");
                                //manda una mail di conferma avvenuta prenotazione
                            }
                        } else {
                            console.log("Date inserite non correttamente");
                            alert("Date inserite non correttamente");
                        }

                    })
                })
            })
        }
    })


    prenotaSalaBlu.addEventListener("click", function (e) {
        e.preventDefault();

        if(idUtente === null || idUtente === "null" || idUtente === ""){
            //se l'utente non ha effettuato l'accesso viene reindirizzato nella pagina di accesso
            alert("Verrai reindirizzato alla pagina di login");
            open("accedi.html");

        }else {

            /* qui dobbiamo prenderci:
                l'id dell'utente tramite il suo nominativo di login,
                l'id della sala che sta prenotando,
                le date di inizio e fine dall'html della pagina di prenotazione,
                inserire tutto nel database,
                mostrare un messaggio di conferma.
             */
            fetch('http://localhost:8080/api/get-sala-id-by-name/' + 'Sala Blu', {
                method: 'GET',
            }).then(res1 => res1.json()).then(idSala => {
                console.log(idSala);
                let startDate = dataInizioSalaBlu.value;
                let endDate = dataFineSalaBlu.value;

                fetch('http://localhost:8080/api/get-date-inizio-by-id-sala/' + idSala, {
                    method: 'GET',
                }).then(res2 => res2.json()).then(dataInizioDb => {
                    console.log("Data inizio db");
                    console.log(dataInizioDb);

                    fetch('http://localhost:8080/api/get-date-fine-by-id-sala/' + idSala, {
                        method: 'GET',
                    }).then(res3 => res3.json()).then(dataFineDb => {
                        console.log("Data fine db");
                        console.log(dataFineDb);

                        if (startDate !== "" && endDate !== "" && endDate >= startDate) {
                            let salaLibera = false;
                            for (var i = 0; i < dataFineDb.length; i++) {
                                if (((endDate < dataInizioDb[i]) || (endDate > dataFineDb[i]) && ((startDate < dataInizioDb[i]) || (startDate > dataFineDb[i])))) {
                                    //fai la post
                                    salaLibera = true;
                                } else {
                                    salaLibera = false;
                                    console.log("La sala è già occupata");
                                    alert("Sala occupata!");
                                    break;
                                }
                            }
                            //controlla se la sala non ha mai avuto prenotazioni
                            if (dataInizioDb.length === 0 && dataFineDb.length === 0) {
                                salaLibera = true;
                            }
                            if (salaLibera) {
                                /** LA POST FUNZIONA, MA NON AGGIUNGE L'ANAGRAFICA PERCHE' VUOLE TUTTI I CAMPI DI ANAGRAFICA, E SALE */
                                console.log("FAI LA POST QUI");
                                const Data = {
                                    descrizione: document.querySelector("#descrizioneSalaBlu").value,
                                    dataInizio: startDate,
                                    dataFine: endDate
                                }

                                fetch('http://localhost:8080/api/save-prenotazione/' + idUtente + "/" + idSala, {
                                    method: 'POST',
                                    headers: {
                                        "content-type": "application/json; charset=UTF-8",
                                        "Accept": "*/*",
                                        "Accept-Encoding": "gzip,deflate,br",
                                        "Connection": "keep-live"
                                    },
                                    body: JSON.stringify(Data)
                                })
                                console.log("Prenotazione registrata con successo!");
                                alert("Prenotazione registrata con successo!");
                                //manda una mail di conferma avvenuta prenotazione
                            }
                        } else {
                            console.log("Date inserite non correttamente");
                            alert("Date inserite non correttamente");
                        }


                    })
                })
            })
        }
    })


    prenotaSalaRossa.addEventListener("click", function (e) {
        e.preventDefault();

        if(idUtente === null || idUtente === "null" || idUtente === ""){
            //se l'utente non ha effettuato l'accesso viene reindirizzato nella pagina di accesso
            alert("Verrai reindirizzato alla pagina di login");
            open("accedi.html");

        }else {

            /* qui dobbiamo prenderci:
                l'id dell'utente tramite il suo nominativo di login,
                l'id della sala che sta prenotando,
                le date di inizio e fine dall'html della pagina di prenotazione,
                inserire tutto nel database,
                mostrare un messaggio di conferma.
             */
            fetch('http://localhost:8080/api/get-sala-id-by-name/' + 'Sala Rossa', {
                method: 'GET',
            }).then(res1 => res1.json()).then(idSala => {
                console.log(idSala);
                let startDate = dataInizioSalaRossa.value;
                let endDate = dataFineSalaRossa.value;

                fetch('http://localhost:8080/api/get-date-inizio-by-id-sala/' + idSala, {
                    method: 'GET',
                }).then(res2 => res2.json()).then(dataInizioDb => {
                    console.log("Data inizio db");
                    console.log(dataInizioDb);

                    fetch('http://localhost:8080/api/get-date-fine-by-id-sala/' + idSala, {
                        method: 'GET',
                    }).then(res3 => res3.json()).then(dataFineDb => {
                        console.log("Data fine db");
                        console.log(dataFineDb);

                        if (startDate !== "" && endDate !== "" && endDate >= startDate) {
                            let salaLibera = false;
                            for (var i = 0; i < dataFineDb.length; i++) {
                                if (((endDate < dataInizioDb[i]) || (endDate > dataFineDb[i]) && ((startDate < dataInizioDb[i]) || (startDate > dataFineDb[i])))) {
                                    //fai la post
                                    salaLibera = true;
                                } else {
                                    salaLibera = false;
                                    console.log("La sala è già occupata");
                                    alert("Sala occupata!");
                                    break;
                                }
                            }
                            //controlla se la sala non ha mai avuto prenotazioni
                            if (dataInizioDb.length === 0 && dataFineDb.length === 0) {
                                salaLibera = true;
                            }
                            if (salaLibera) {
                                /** LA POST FUNZIONA, MA NON AGGIUNGE L'ANAGRAFICA PERCHE' VUOLE TUTTI I CAMPI DI ANAGRAFICA, E SALE */
                                console.log("FAI LA POST QUI");
                                const Data = {
                                    descrizione: document.querySelector("#descrizioneSalaRossa").value,
                                    dataInizio: startDate,
                                    dataFine: endDate
                                }

                                fetch('http://localhost:8080/api/save-prenotazione/' + idUtente + "/" + idSala, {
                                    method: 'POST',
                                    headers: {
                                        "content-type": "application/json; charset=UTF-8",
                                        "Accept": "*/*",
                                        "Accept-Encoding": "gzip,deflate,br",
                                        "Connection": "keep-live"
                                    },
                                    body: JSON.stringify(Data)
                                })
                                console.log("Prenotazione registrata con successo!");
                                alert("Prenotazione registrata con successo!");
                                //manda una mail di conferma avvenuta prenotazione
                            }
                        } else {
                            console.log("Date inserite non correttamente");
                            alert("Date inserite non correttamente");
                        }


                    })
                })
            })
        }
    })


    prenotaSalaViola.addEventListener("click", function (e) {
        e.preventDefault();

        if(idUtente === null || idUtente === "null" || idUtente === ""){
            //se l'utente non ha effettuato l'accesso viene reindirizzato nella pagina di accesso
            alert("Verrai reindirizzato alla pagina di login");
            open("accedi.html");

        }else {

            /* qui dobbiamo prenderci:
                l'id dell'utente tramite il suo nominativo di login,
                l'id della sala che sta prenotando,
                le date di inizio e fine dall'html della pagina di prenotazione,
                inserire tutto nel database,
                mostrare un messaggio di conferma.
             */
            fetch('http://localhost:8080/api/get-sala-id-by-name/' + 'Sala Viola', {
                method: 'GET',
            }).then(res1 => res1.json()).then(idSala => {
                console.log(idSala);
                let startDate = dataInizioSalaViola.value;
                let endDate = dataFineSalaViola.value;

                fetch('http://localhost:8080/api/get-date-inizio-by-id-sala/' + idSala, {
                    method: 'GET',
                }).then(res2 => res2.json()).then(dataInizioDb => {
                    console.log("Data inizio db");
                    console.log(dataInizioDb);

                    fetch('http://localhost:8080/api/get-date-fine-by-id-sala/' + idSala, {
                        method: 'GET',
                    }).then(res3 => res3.json()).then(dataFineDb => {
                        console.log("Data fine db");
                        console.log(dataFineDb);

                        if (startDate !== "" && endDate !== "" && endDate >= startDate) {
                            let salaLibera = false;
                            for (var i = 0; i < dataFineDb.length; i++) {
                                if (((endDate < dataInizioDb[i]) || (endDate > dataFineDb[i]) && ((startDate < dataInizioDb[i]) || (startDate > dataFineDb[i])))) {
                                    //fai la post
                                    salaLibera = true;
                                } else {
                                    salaLibera = false;
                                    console.log("La sala è già occupata");
                                    alert("Sala occupata!");
                                    break;
                                }
                            }
                            //controlla se la sala non ha mai avuto prenotazioni
                            if (dataInizioDb.length === 0 && dataFineDb.length === 0) {
                                salaLibera = true;
                            }
                            if (salaLibera) {
                                /** LA POST FUNZIONA, MA NON AGGIUNGE L'ANAGRAFICA PERCHE' VUOLE TUTTI I CAMPI DI ANAGRAFICA, E SALE */
                                console.log("FAI LA POST QUI");
                                const Data = {
                                    descrizione: document.querySelector("#descrizioneSalaViola").value,
                                    dataInizio: startDate,
                                    dataFine: endDate
                                }

                                fetch('http://localhost:8080/api/save-prenotazione/' + idUtente + "/" + idSala, {
                                    method: 'POST',
                                    headers: {
                                        "content-type": "application/json; charset=UTF-8",
                                        "Accept": "*/*",
                                        "Accept-Encoding": "gzip,deflate,br",
                                        "Connection": "keep-live"
                                    },
                                    body: JSON.stringify(Data)
                                })
                                console.log("Prenotazione registrata con successo!");
                                alert("Prenotazione registrata con successo!");
                                //manda una mail di conferma avvenuta prenotazione
                            }
                        } else {
                            console.log("Date inserite non correttamente");
                            alert("Date inserite non correttamente");
                        }


                    })
                })
            })
        }
    })


    prenotaSalaGialla.addEventListener("click", function (e) {
        e.preventDefault();

        if(idUtente === null || idUtente === "null" || idUtente === ""){
            //se l'utente non ha effettuato l'accesso viene reindirizzato nella pagina di accesso
            alert("Verrai reindirizzato alla pagina di login");
            open("accedi.html");

        }else {

            /* qui dobbiamo prenderci:
                l'id dell'utente tramite il suo nominativo di login,
                l'id della sala che sta prenotando,
                le date di inizio e fine dall'html della pagina di prenotazione,
                inserire tutto nel database,
                mostrare un messaggio di conferma.
             */
            fetch('http://localhost:8080/api/get-sala-id-by-name/' + 'Sala Gialla', {
                method: 'GET',
            }).then(res1 => res1.json()).then(idSala => {
                console.log(idSala);
                let startDate = dataInizioSalaGialla.value;
                let endDate = dataFineSalaGialla.value;

                fetch('http://localhost:8080/api/get-date-inizio-by-id-sala/' + idSala, {
                    method: 'GET',
                }).then(res2 => res2.json()).then(dataInizioDb => {
                    console.log("Data inizio db");
                    console.log(dataInizioDb);

                    fetch('http://localhost:8080/api/get-date-fine-by-id-sala/' + idSala, {
                        method: 'GET',
                    }).then(res3 => res3.json()).then(dataFineDb => {
                        console.log("Data fine db");
                        console.log(dataFineDb);

                        if (startDate !== "" && endDate !== "" && endDate >= startDate) {
                            let salaLibera = false;
                            for (var i = 0; i < dataFineDb.length; i++) {
                                if (((endDate < dataInizioDb[i]) || (endDate > dataFineDb[i]) && ((startDate < dataInizioDb[i]) || (startDate > dataFineDb[i])))) {
                                    //fai la post
                                    salaLibera = true;
                                } else {
                                    salaLibera = false;
                                    console.log("La sala è già occupata");
                                    alert("Sala occupata!");
                                    break;
                                }
                            }
                            //controlla se la sala non ha mai avuto prenotazioni
                            if (dataInizioDb.length === 0 && dataFineDb.length === 0) {
                                salaLibera = true;
                            }
                            if (salaLibera) {
                                /** LA POST FUNZIONA, MA NON AGGIUNGE L'ANAGRAFICA PERCHE' VUOLE TUTTI I CAMPI DI ANAGRAFICA, E SALE */
                                console.log("FAI LA POST QUI");
                                const Data = {
                                    descrizione: document.querySelector("#descrizioneSalaGialla").value,
                                    dataInizio: startDate,
                                    dataFine: endDate
                                }

                                fetch('http://localhost:8080/api/save-prenotazione/' + idUtente + "/" + idSala, {
                                    method: 'POST',
                                    headers: {
                                        "content-type": "application/json; charset=UTF-8",
                                        "Accept": "*/*",
                                        "Accept-Encoding": "gzip,deflate,br",
                                        "Connection": "keep-live"
                                    },
                                    body: JSON.stringify(Data)
                                })
                                console.log("Prenotazione registrata con successo!");
                                alert("Prenotazione registrata con successo!");
                                //manda una mail di conferma avvenuta prenotazione
                            }
                        } else {
                            console.log("Date inserite non correttamente");
                            alert("Date inserite non correttamente");
                        }


                    })
                })
            })
        }
    })


    prenotaSalaNera.addEventListener("click", function (e) {
        e.preventDefault();

        if(idUtente === null || idUtente === "null" || idUtente === ""){
            //se l'utente non ha effettuato l'accesso viene reindirizzato nella pagina di accesso
            alert("Verrai reindirizzato alla pagina di login");
            open("accedi.html");

        }else {

            /* qui dobbiamo prenderci:
                l'id dell'utente tramite il suo nominativo di login,
                l'id della sala che sta prenotando,
                le date di inizio e fine dall'html della pagina di prenotazione,
                inserire tutto nel database,
                mostrare un messaggio di conferma.
             */
            fetch('http://localhost:8080/api/get-sala-id-by-name/' + 'Sala Nera', {
                method: 'GET',
            }).then(res1 => res1.json()).then(idSala => {
                console.log(idSala);
                let startDate = dataInizioSalaNera.value;
                let endDate = dataFineSalaNera.value;

                fetch('http://localhost:8080/api/get-date-inizio-by-id-sala/' + idSala, {
                    method: 'GET',
                }).then(res2 => res2.json()).then(dataInizioDb => {
                    console.log("Data inizio db");
                    console.log(dataInizioDb);

                    fetch('http://localhost:8080/api/get-date-fine-by-id-sala/' + idSala, {
                        method: 'GET',
                    }).then(res3 => res3.json()).then(dataFineDb => {
                        console.log("Data fine db");
                        console.log(dataFineDb);

                        if (startDate !== "" && endDate !== "" && endDate >= startDate) {
                            let salaLibera = false;
                            for (var i = 0; i < dataFineDb.length; i++) {
                                if (((endDate < dataInizioDb[i]) || (endDate > dataFineDb[i]) && ((startDate < dataInizioDb[i]) || (startDate > dataFineDb[i])))) {
                                    //fai la post
                                    salaLibera = true;
                                } else {
                                    salaLibera = false;
                                    console.log("La sala è già occupata");
                                    alert("Sala occupata!");
                                    break;
                                }
                            }
                            //controlla se la sala non ha mai avuto prenotazioni
                            if (dataInizioDb.length === 0 && dataFineDb.length === 0) {
                                salaLibera = true;
                            }
                            if (salaLibera) {
                                /** LA POST FUNZIONA, MA NON AGGIUNGE L'ANAGRAFICA PERCHE' VUOLE TUTTI I CAMPI DI ANAGRAFICA, E SALE */
                                console.log("FAI LA POST QUI");
                                const Data = {
                                    descrizione: document.querySelector("#descrizioneSalaNera").value,
                                    dataInizio: startDate,
                                    dataFine: endDate
                                }

                                fetch('http://localhost:8080/api/save-prenotazione/' + idUtente + "/" + idSala, {
                                    method: 'POST',
                                    headers: {
                                        "content-type": "application/json; charset=UTF-8",
                                        "Accept": "*/*",
                                        "Accept-Encoding": "gzip,deflate,br",
                                        "Connection": "keep-live"
                                    },
                                    body: JSON.stringify(Data)
                                })
                                console.log("Prenotazione registrata con successo!");
                                alert("Prenotazione registrata con successo!");
                                //manda una mail di conferma avvenuta prenotazione
                            }
                        } else {
                            console.log("Date inserite non correttamente");
                            alert("Date inserite non correttamente");
                        }


                    })
                })
            })
        }
    })

    let prezzi = document.querySelector("#prezzi");
    let home = document.querySelector("#home");

    prezzi.addEventListener("click", function (e){
        e.preventDefault();
        open("prezzi.html?id=" + idUtente);
    })

    leMiePrenotazioni.addEventListener("click", function (e){
        e.preventDefault();
        open("prenotazioni.html?id=" + idUtente);
    })

    home.addEventListener("click", function (e){
        //e.preventDefault();
        console.log("Ho cliccato il link Home");
        open("index.html?id=" + idUtente);
    })

    logoutButton.addEventListener("click", function (e){
        e.preventDefault();
        open("index.html?id=" + null);
    })
})