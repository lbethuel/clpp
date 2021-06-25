const init = () => {
    const inputUsuario = document.querySelector('input[type="usuario"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login_submit');


    const errorHandler = () => {
        submitButton.classList.remove('success')
        submitButton.classList.add('error');
        submitButton.textContent = "Erro"
    }

    const successHandler = () => { 
        submitButton.classList.remove('error');
        submitButton.classList.add('success');
        submitButton.textContent = "Entrando";
        window.location.href = "../Home/home.html";
    }

    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();


            console.log(inputPassword.value, inputUsuario.value)

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: inputUsuario.value,
                    password: inputPassword.value
                })
            }).then((response) => {
                if (response.status !== 200) {
                    return errorHandler();
                }
                successHandler();
            }).catch(() => {
                errorHandler();
            })
        })
    }
}

window.onload = init;