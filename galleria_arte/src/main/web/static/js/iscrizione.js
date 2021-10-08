let formIscrizione = document.querySelector("#submitForm")
    console.log("cciciic")
    formIscrizione.addEventListener("submit",function (e) {
        console.log("cciciic")
        e.preventDefault()
        console.log("cciciic")

        let fields = formIscrizione.querySelectorAll('.required');
        let formValido = true;

        fields.forEach(function (el, i, ar) {
            if (el.value === "") {
                console.log(`TROVATO CAMPO VUOTO -> ${el.name}`)
                let formRow = el.closest('.formRow');
                let messaggi = formRow.querySelector('.messaggi');
                // messaggi.innerHTML = "Campo obbligatorio"
                messaggi.classList.remove("hidden")
                formValido = false;
            } else {
                let formRow = el.closest('.formRow');
                let messaggi = formRow.querySelector('.messaggi');
                // messaggi.innerHTML = ""
                messaggi.classList.add("hidden")
            }
        })
    })