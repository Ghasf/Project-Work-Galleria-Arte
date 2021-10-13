//let idUtente = 2; da cambiare quando sarà implementato il login
//let idPrenotazione = 5;

/*let listaPrenotazioni = document.querySelector("#listaPrenotazioni");
let cancellaPrenotazione = document.querySelector("#cancellaPrenotazione");*/

window.addEventListener('load', function () {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idUtente = urlParams.get('id');
    //console.log(idUtente);

    let home = document.querySelector("#home");
    let sale = document.querySelector("#sale");
    let prezzi = document.querySelector("#prezzi");
    let userWelcome = document.querySelector("#userWelcome");
    let userWelcomeName = document.querySelector("#userWelcomeName");
    let leMiePrenotazioni = document.querySelector("#navPrenotazioni");
    let loginbuttons = document.querySelector("#loginButtons");
    let logoutButton = document.querySelector("#buttonEsci");
    let logo = document.querySelector("#logo")

    if (idUtente !== "null") {
        if (idUtente !== null) {
            if (idUtente !== "") {
                userWelcome.style.display = "block";
                loginbuttons.style.display = "none";
                leMiePrenotazioni.classList.remove("hidden");
                //console.log("Ho rimosso la classe hidden");

                //prendi il nome dell'utente dal db (tramite l'id) e stampalo nel div #userWelcomeName
                fetch('http://localhost:8080/api/get-anagrafica-by-id/' + idUtente, {
                    method: 'GET',
                }).then(res => res.json()).then(utente => { //funziona ma dovremmo ritornare un json
                    //console.log("Nome utente");
                    //console.log(utente.nominativo);

                    userWelcomeName.innerHTML = utente.nominativo;
                    userWelcomeName.style.display = "block";
                })
            }
        }
    }


    fetch('http://localhost:8080/api/get-prenotazioni-by-id-utente/' + idUtente, {
        method: 'GET',
    }).then(res => res.json()).then(prenotazioni => {
        //console.log("Prenotazioni");
        //console.log(prenotazioni);

        stampaPrenotazioni(prenotazioni, idUtente);
    })

    home.addEventListener("click", function (e) {
        e.preventDefault();
        open("index.html?id=" + idUtente);
    })
    logo.addEventListener("click", function (e){
        e.preventDefault();
        open("index.html?id=" + idUtente);
    })

    sale.addEventListener("click", function (e) {
        e.preventDefault();
        //console.log("Ho cliccato sulle sale");
        open("Sale.html?id=" + idUtente);
    })

    prezzi.addEventListener("click", function (e) {
        e.preventDefault();
        //console.log("Ho cliccato sulle sale");
        open("prezzi.html?id=" + idUtente);
    })

    logoutButton.addEventListener("click", function (e) {
        e.preventDefault();
        open("index.html?id=" + null);
    })
})

function stampaPrenotazioni(prenotazioni, idUtente) {
    let tBody = document.querySelector("#tabellaBody")

    //console.log(prenotazioni.length);
    //console.log(prenotazioni);

    let viewportWidth = window.innerWidth;
    let titolo = document.querySelector("#titolo");
    if (viewportWidth <= 500) {
        //console.log("titolo inferiore");
        titolo.style.display = "none";
    } else {
        titolo.style.display = "block";
    }

    for (let j = 0; j < prenotazioni.length; j++) {
        let row = document.createElement("tr");

        let cell = document.createElement("td");
        let cellText = document.createTextNode(prenotazioni[j].idPrenotazione);
        let bottone = document.createTextNode(prenotazioni[j].idPrenotazione);
        cell.appendChild(cellText);

        if (viewportWidth <= 500) {
            console.log("dimensione inferiore");
            cell.classList.add("hidden");
        } else {
            cell.classList.remove("hidden");
        }
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(prenotazioni[j].descrizione);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(prenotazioni[j].dataInizio);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(prenotazioni[j].dataFine);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        cellText = document.createTextNode(prenotazioni[j].sale.nome);
        cell.appendChild(cellText);
        row.appendChild(cell);

        cell = document.createElement("td");
        bottone = document.createElement("button")
        bottone.className = "btn-sm btn-danger"
        bottone.dataset.id = prenotazioni[j].idPrenotazione;
        bottone.innerHTML = "Cancella"
        cell.appendChild(bottone);
        row.appendChild(cell);
        bottone.addEventListener("click", function (e) {
            e.preventDefault();
            //console.log(e.currentTarget);
            //console.log(e.currentTarget.dataset.id);

            let idPrenotazione = e.currentTarget.dataset.id;
            console.log(idPrenotazione);


            //prendi l'email dell'utente loggato per inviargli una mail di conferma
            // fetch('http://localhost:8080/api/get-email-by-id/' + idUtente, {
            //     method: 'GET',
            // }).then(res => res.text()).then(function (emailUtente) {
            //
            //     console.log(emailUtente);
            //     console.log(idPrenotazione);
            //
            //     fetch('http://localhost:8080/api/get-prenotazione-by-id/' + idPrenotazione, {
            //         method: 'GET',
            //     }).then(function (response){
            //     return response.text()
            //     }).then(function (prenotazione) {
            //
            //         let j = JSON.parse(prenotazione);
            //         console.log(prenotazione);
            //         console.log(JSON.parse(prenotazione).descrizione);
            //         let destinatario = emailUtente;
            //         let oggetto = "Sublime Art - prenotazione cancellata con successo";
            //         let messaggio = "Hai cancellato la prenotazione: " + j.descrizione;
            //
            //         fetch('http://localhost:8080/api/send-email/' + destinatario + '/' + oggetto + '/' + messaggio, {
            //             method: 'POST',
            //             headers: {
            //                 "content-type": "application/json; charset=UTF-8",
            //                 "Accept": "*/*",
            //                 "Accept-Encoding": "gzip,deflate,br",
            //                 "Connection": "keep-live",
            //                 "Access-Control-Allow-Origin": "*"
            //             },
            //             body: JSON.stringify(messaggio)
            //         }).then(function (ress) {
            //             console.log(ress);

                fetch('http://localhost:8080/api/get-email-by-id/' + idUtente, {
                    method: 'GET',
                }).then(res => res.text()).then(function (emailUtente) {

                        fetch('http://localhost:8080/api/delete-prenotazione-by-id/' + idPrenotazione, {
                            method: 'DELETE',
                        }).then(function(data){
                            alert("***Prenotazione cancellata***\n\nTi è stata inviata una email di conferma all'inidirizzo " + emailUtente)

                            //open("prenotazioni.html?id=" + idUtente);
                            location.reload();
                        })
                    })
                })
            //})
        //})
        tBody.appendChild(row);
    }
}
