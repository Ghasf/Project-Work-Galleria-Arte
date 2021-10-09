window.addEventListener('load', function (event) {
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
        if (privacy === null) {
            let formRow = privacy2.closest('.formRow');
            let messaggi = formRow.querySelector('.messaggi');
            messaggi.classList.remove("hidden");
            formValido = false;
        }

        if (formValido) {
            console.log("Form valido");

            /** controlla che l'email non sia già presente nel database
             *
             * poi fai la POST
             */

            emailCheckAndPost();

        } else {
            console.log("Form non valido");
        }
    })
})

function emailCheckAndPost() {
    let emailOk = true;
    let emailField = document.querySelector("#email").value;

    fetch('http://localhost:8080/api/get-email-list', {
        method: "GET",
    }).then(res => res.json()).then(email => {
        console.log("Lista email");
        console.log(email);

        for (var i = 0; i < email.length; i++) {
            console.log(emailField + " " + email[i]);
            if (emailField === email[i]) {
                console.log("La mail è già presente, imposta emailOk a FALSO")
                console.log(emailOk)
                emailOk = false;
                console.log(emailOk)
                break;
            }
        }

        if (emailOk) {
            if (document.querySelector("#password").value === (document.querySelector("#confermapassword").value)){

                /** fai la POST **/

                const Data = {
                    nominativo: document.querySelector("#nominativo").value,
                    indirizzo: document.querySelector("#indirizzo").value,
                    cap: document.querySelector("#cap").value,
                    localita: document.querySelector("#localita").value,
                    provincia: document.querySelector("#provincia").value,
                    codiceFiscale: document.querySelector("#codicefiscale").value,
                    partitaIva: document.querySelector("#partitaiva").value,
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                    sitoWeb: document.querySelector("#sitoweb").value,
                }

                fetch('http://localhost:8080/api/save-anagrafica', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json; charset=UTF-8",
                        "Accept": "*/*",
                        "Accept-Encoding": "gzip,deflate,br",
                        "Connection": "keep-live"
                    },
                    body: JSON.stringify(Data)
                })

                console.log("Utente registrato con successo!");
                alert("Utente registrato con successo!");
            }else{
                console.log("Le password non corrispondono!");
                alert("Le password non corrispondono!");
            }
        }
    })
}