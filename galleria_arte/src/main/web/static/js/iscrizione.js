window.addEventListener('load', function(event) {
    let formIscrizione = document.querySelector("#submitForm")
    formIscrizione.addEventListener("submit", function (e) {
        e.preventDefault()

        let fields = formIscrizione.querySelectorAll('.required');
        let formValido = true;

        fields.forEach(function (el, i, ar) {
            if (el.value === "") {
                console.log(`TROVATO CAMPO VUOTO -> ${el.name}`)
                let formRow = el.closest('.formRow');
                let messaggi = formRow.querySelector('.messaggi');
                messaggi.classList.remove("hidden");
                formValido = false;
            } else {
                let formRow = el.closest('.formRow');
                let messaggi = formRow.querySelector('.messaggi');
                messaggi.classList.add("hidden");
            }
        })
        let privacy2 = document.querySelector("#gridCheck")
        let privacy = document.querySelector("[id=gridCheck]:checked");
        if(privacy === null){
            let formRow = privacy2.closest('.formRow');
            let messaggi = formRow.querySelector('.messaggi');
            messaggi.classList.remove("hidden");
            formValido = false;
        }

        if(formValido){
            console.log("Form valido");
            /**qui devi fare la post**/
        }else{
            console.log("Form non valido");
        }
    })
})