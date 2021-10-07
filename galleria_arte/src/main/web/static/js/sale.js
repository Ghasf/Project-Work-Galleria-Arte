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

prenotaSalaVerde.addEventListener("click", function(e){
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
    }).then(res => res.json()).then(idSala => {
        console.log(idSala);
        let dataInizio = dataInizioSalaVerde.value;
        let dataFine = dataFineSalaVerde.value;

        const Data = {
            id_utente: idUtente,
            id_sala: idSala,
            data_inizio: dataInizio,
            data_fine: dataFine
        }
        fetch('http://localhost:8080/api/save-prenotazione/', {
            method: 'POST',
            headers: {
                "content-type":"application/json; charset=UTF-8"
            },
            body: Data
        }).then(res => res.json()).then(result => {
            if(result===0){
                console.log("OK");
            }else{
                console.log("ERRORE")
            }
        })
    })




})