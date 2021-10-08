let idUtente = 2;

let prenotaSalaVerde = document.querySelector("#prenotaSalaVerde");
let prenotaSalaBlu = document.querySelector("#prenotaSalaBlu");
let prenotaSalaRossa = document.querySelector("#prenotaSalaRossa");
let prenotaSalaViola = document.querySelector("#prenotaSalaViola");
let prenotaSalaGialla = document.querySelector("#prenotaSalaGialla");
let prenotaSalaNera = document.querySelector("#prenotaSalaNera");
let inserisciPrenotazione = document.querySelector("#inserisciPrenotazione");
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

prenotaSalaVerde.addEventListener("click", function (e) {
    e.preventDefault();
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
                if(salaLibera) {
                    /** LA POST FUNZIONA, MA NON AGGIUNGE L'ANAGRAFICA PERCHE' VUOLE TUTTI I CAMPI DI ANAGRAFICA, E SALE */
                    console.log("FAI LA POST QUI");
                    const Data = {
                        descrizione: '',
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
                    //manda una mail di conferma avvenuta prenotazione
                }
            })
        })
    })
})