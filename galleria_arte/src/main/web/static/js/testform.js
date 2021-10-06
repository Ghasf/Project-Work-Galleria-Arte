window.addEventListener('load', function (){
    let cancellaPrenotazione = document.querySelector("#cancellaPrenotazione");
    console.log("prima dell'event listener")
    cancellaPrenotazione.addEventListener("click", function (e){
        e.preventDefault();
        console.log("dopo il prevent default")
        let id = document.querySelector("#nominativo").value
        fetch('http://localhost:8080/api/delete-prenotazione-by-id/' + id, {
            method: 'DELETE',
        }).then(res => res.json()).then(res => console.log(res));
    })
})