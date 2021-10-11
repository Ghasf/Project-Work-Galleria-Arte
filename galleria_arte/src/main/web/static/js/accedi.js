window.addEventListener('load', function (event) {

    let formAccedi = document.querySelector("#submitForm");
    formAccedi.addEventListener("submit", function (e) {
        e.preventDefault();

        let fields = formAccedi.querySelectorAll('.required');
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

        if (formValido) {

            checkAndPost();
        }

    })
})

function checkAndPost() {
    let emailOk = false;
    let passwordOk = false;
    let emailField = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    fetch('http://localhost:8080/api/get-email-list', {
        method: "GET",
    }).then(res => res.json()).then(email => {
            console.log("Lista email");
            console.log(email);

            for (var i = 0; i < email.length; i++) {
                console.log(emailField + " " + email[i]);
                if (emailField === email[i]) {
                    console.log("Ho trovato la mail nel database")
                    emailOk = true;
                    break;
                }
            }

            if (emailOk) {
                fetch('http://localhost:8080/api/get-password-by-email/' + emailField, {
                    method: "GET",
                }).then(res => res.text()).then(psw => {
                    console.log("Stampo la password della relativa email");
                    console.log(psw);

                    if (password === psw) {
                        passwordOk = true;
                    } else {
                        console.log("La password inserita è errata");
                        alert("La  password inserita è errata")
                    }

                    if (passwordOk) {
                        /** prendi l'id dell'utente con questa email */

                        fetch('http://localhost:8080/api/get-user-id-by-email/' + emailField, {
                            method: "GET",
                        }).then(res => res.json()).then(userId => {
                            console.log("Stampo l'ID dell'utente per la relativa email");
                            console.log(userId);
                            open("index.html?id=" + userId);
                            console.log("Dopo la open");
                        })
                    }
                })
            } else {
                console.log("Nessun utente registrato con questa email!");
                alert("Nessun utente registrato con questa email!");
            }
        }
    )
}
