let idUtente = 2; //da cambiare quando sarà implementato il login
let prenotaSalaVerde = document.querySelector("#prenotaSalaVerde");
let prenotaSalaBlu = document.querySelector("#prenotaSalaBlu");
let prenotaSalaRossa = document.querySelector("#prenotaSalaRossa");
let prenotaSalaViola = document.querySelector("#prenotaSalaViola");
let prenotaSalaGialla = document.querySelector("#prenotaSalaGialla");
let prenotaSalaNera = document.querySelector("#prenotaSalaNera");
let inserisciPrenotazione = document.querySelector("#inserisciPrenotazione");
window.addEventListener('load', function (){
    let cancellaPrenotazione = document.querySelector("#cancellaPrenotazione");
    //console.log("prima dell'event listener")
    cancellaPrenotazione.addEventListener("click", function (e){
        e.preventDefault();
        //console.log("dopo il prevent default")
        fetch('http://localhost:8080/api/delete-prenotazione-by-id/' + idUtente, {
            method: 'DELETE',
        }).then(res => res.json()).then(res => console.log(res));
    })

    inserisciPrenotazione.addEventListener("click", function (e){
        /* qui dobbiamo prenderci:
            l'id dell'utente tramite il suo nominativo di login,
            l'id della sala che sta prenotando,
            le date di inizio e fine dall'html della pagina di prenotazione,
            inserire tutto nel database,
            mostrare un messaggio di conferma.
         */
    })

    prenotaSalaVerde.addEventListener("click", function(e){
        e.preventDefault();
        //qui dobbiamo prenderci l'id della Sala Verde
    })
})