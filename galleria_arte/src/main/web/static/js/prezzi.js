window.addEventListener("load", function() {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idUtente = urlParams.get('id');
    console.log(idUtente);

    //let leMiePrenotazioni = document.querySelector("#leMiePrenotazioni");
    let home = document.querySelector("#home");
    let sale = document.querySelector("#sale");
    let userWelcome = document.querySelector("#userWelcome");
    let userWelcomeName = document.querySelector("#userWelcomeName");
    let leMiePrenotazioni = document.querySelector("#navPrenotazioni");
    let loginbuttons = document.querySelector("#loginButtons");

    if(idUtente != null){
        console.log("stampo l'id se è diverso da null" + " " + `${idUtente}`)
        userWelcome.style.display="block";
        loginbuttons.style.display="none";
        leMiePrenotazioni.classList.remove("hidden");
        //leMiePrenotazioni.style.display="block";

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


    // leMiePrenotazioni.addEventListener("click", function (e){
    //     e.preventDefault();
    //     open("testform.html?id=" + idUtente);
    // })

    home.addEventListener("click", function (e){
        e.preventDefault();
        open("index.html?id=" + idUtente);
    })

    sale.addEventListener("click", function (e){
        e.preventDefault();
        console.log("Ho cliccato sulle sale");
        open("Sale.html?id=" + idUtente);
    })
})