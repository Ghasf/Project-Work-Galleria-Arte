let idUtente = 2; //da cambiare quando sarà implementato il login
let idPrenotazione = 5;

/*let listaPrenotazioni = document.querySelector("#listaPrenotazioni");
let cancellaPrenotazione = document.querySelector("#cancellaPrenotazione");*/

window.addEventListener('load', function () {

    fetch('http://localhost:8080/api/get-prenotazioni-by-id-utente/' + idUtente, {
        method: 'GET',
    }).then(res => res.json()).then(prenotazioni => {
        //console.log("Prenotazioni");
        //console.log(prenotazioni);

        stampaPrenotazioni(prenotazioni);
    })
})

function stampaPrenotazioni(prenotazioni) {
    let tBody = document.querySelector("#tabellaBody")

    //console.log(prenotazioni.length);
    //console.log(prenotazioni);

    for (var j = 0; j < prenotazioni.length; j++) {
        var row = document.createElement("tr");

        var cell = document.createElement("td");
        var cellText = document.createTextNode(prenotazioni[j].idPrenotazione);
        cell.appendChild(cellText);
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
        cellText = document.createElement("button")
        cellText.dataset.id = prenotazioni[j].idPrenotazione;
        cellText.innerHTML = "cancella"
        cell.appendChild(cellText);
        row.appendChild(cell);
        cellText.addEventListener("click", function (e) {
            e.preventDefault();
            //console.log(e.currentTarget);
            //console.log(e.currentTarget.dataset.id);

            fetch('http://localhost:8080/api/delete-prenotazione-by-id/' + e.currentTarget.dataset.id, {
                method: 'DELETE',
            }).then(res => res.json()).then(res => console.log(res));
            alert("prenotazione cancellata");
        })
        tBody.appendChild(row);
    }
}
