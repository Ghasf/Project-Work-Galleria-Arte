//let idUtente = 2;

window.addEventListener("load", function (){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idUtente = urlParams.get('id');
    console.log(idUtente);

    let sale = document.querySelector("#sale");
    let prezzi = document.querySelector("#prezzi");
    let leMiePrenotazioni = document.querySelector("#leMiePrenotazioni");
    let userWelcome = document.querySelector("#userWelcome");
    let userWelcomeName = document.querySelector("#userWelcomeName");
    let loginbuttons = document.querySelector("#loginButtons");
    userWelcome.style.display="none";
    userWelcomeName.style.display="none";
    leMiePrenotazioni.style.display="none";
    //let loginUtente = document.querySelector("#buttonAccedi");

    if(idUtente != null){
        userWelcome.style.display="block";
        loginbuttons.style.display="none";
        leMiePrenotazioni.style.display="block";

        //prendi il nome dell'utente dal db (tramite l'id) e stampalo nel div #userWelcomeName
        fetch('http://localhost:8080/api/get-anagrafica-by-id/' + idUtente, {
            method: 'GET',
        }).then(res => res.json()).then(utente => { //funziona ma dovremmo ritornare un json
            console.log("Nome utente");
            console.log(utente.nominativo);

            userWelcomeName.innerHTML = utente.nominativo;
            userWelcomeName.style.display="block";
        })
    }


    // loginUtente.addEventListener("click", function (e){
    //
    // })

    sale.addEventListener("click", function (e){
        e.preventDefault();
        open("Sale.html?id=" + idUtente);
    })

    prezzi.addEventListener("click", function (e){
        e.preventDefault();
        open("prezzi.html?id=" + idUtente);
    })

    leMiePrenotazioni.addEventListener("click", function (e){
        e.preventDefault();
        open("testform.html?id=" + idUtente);
    })
})
