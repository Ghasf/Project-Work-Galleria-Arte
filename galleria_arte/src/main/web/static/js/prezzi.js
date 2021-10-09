window.addEventListener("load", function() {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idUtente = urlParams.get('id');
    console.log(idUtente);

    let leMiePrenotazioni = document.querySelector("#leMiePrenotazioni");
    let home = document.querySelector("#homeIndex");

    leMiePrenotazioni.addEventListener("click", function (e){
        e.preventDefault();
        open("testform.html?id=" + idUtente);
    })

    home.addEventListener("click", function (e){
        e.preventDefault();
        open("index.html?id=" + idUtente);
    })
})