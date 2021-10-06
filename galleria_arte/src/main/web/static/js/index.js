let slideIndex = document.getElementsByClassName("inizio")
window.addEventListener("load", function (){
    let userWelcome = document.querySelector("#userWelcome");
    let loginbuttons = document.querySelector("#loginButtons");
    let leMiePrenotazioni = document.querySelector("#leMiePrenotazioni");
    userWelcome.style.display="none";
    leMiePrenotazioni.style.display="none";
    let loginUtente = document.querySelector("#buttonAccedi");
    loginUtente.addEventListener("click", function (e){
        userWelcome.style.display="block";
        loginbuttons.style.display="none";
        leMiePrenotazioni.style.display="block";
    })
})
