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
    let logoutButton = document.querySelector("#buttonEsci");
    userWelcome.style.display="none";
    userWelcomeName.style.display="none";
    logoutButton.style.display="none";

    if(idUtente !== "null"){
        if(idUtente !== null) {
            if (idUtente !== "") {
                userWelcome.style.display = "block";
                loginbuttons.style.display = "none";
                logoutButton.style.display="block";
                leMiePrenotazioni.classList.remove("hidden");
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


    leMiePrenotazioni.addEventListener("click", function (e){
        e.preventDefault();
        open("testform.html?id=" + idUtente);
    })

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