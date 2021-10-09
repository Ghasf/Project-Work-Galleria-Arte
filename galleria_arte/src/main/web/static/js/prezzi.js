window.addEventListener("load", function() {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idUtente = urlParams.get('id');
    console.log(idUtente);

    //let leMiePrenotazioni = document.querySelector("#leMiePrenotazioni");
    let home = document.querySelector("#home");
    let sale = document.querySelector("#sale");

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