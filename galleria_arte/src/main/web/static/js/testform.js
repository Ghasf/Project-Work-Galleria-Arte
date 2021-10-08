let idUtente = 2; //da cambiare quando sarà implementato il login
let idPrenotazione = 5;

let listaPrenotazioni = document.querySelector("#listaPrenotazioni");
let cancellaPrenotazione = document.querySelector("#cancellaPrenotazione");

window.addEventListener('load', function (){

    //console.log("prima dell'event listener")
    fetch('http://localhost:8080/api/get-prenotazioni-by-id-utente/' + idUtente, {
        method: 'GET',
    }).then(res => res.json()).then(prenotazioni => {
        console.log("Prenotazioni");
        console.log(prenotazioni);

        listaPrenotazioni.innerHTML = prenotazioni.toString();
    })


    cancellaPrenotazione.addEventListener("click", function (e){
        e.preventDefault();
        //console.log("dopo il prevent default")



        fetch('http://localhost:8080/api/delete-prenotazione-by-id/' + idPrenotazione, {
            method: 'DELETE',
        }).then(res => res.json()).then(res => console.log(res));
    })


})