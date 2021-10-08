let idUtente = 2;

window.addEventListener("load", function (){
    let userWelcome = document.querySelector("#userWelcome");
    let userWelcomeName = document.querySelector("#userWelcomeName");
    let loginbuttons = document.querySelector("#loginButtons");
    let leMiePrenotazioni = document.querySelector("#leMiePrenotazioni");
    userWelcome.style.display="none";
    userWelcomeName.style.display="none";
    leMiePrenotazioni.style.display="none";
    let loginUtente = document.querySelector("#buttonAccedi");

    loginUtente.addEventListener("click", function (e){
        userWelcome.style.display="block";
        loginbuttons.style.display="none";
        leMiePrenotazioni.style.display="block";

        //prendi il nome dell'utente dal db (tramite l'id) e stampalo nel div #userWelcomeName
        fetch('http://localhost:8080/api/get-name-anagrafica-by-id/' + idUtente, {
            method: 'GET',
        }).then(res => res.text()).then(nomeUtente => { //funziona ma dovremmo ritornare un json
            console.log("Nome utente");
            console.log(nomeUtente);

            userWelcomeName.innerHTML = nomeUtente;
            userWelcomeName.style.display="block";
        })
    })
})
