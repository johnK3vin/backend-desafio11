document.addEventListener("DOMContentLoaded", () =>{
    const signButton = document.getElementById("signinButton");
    const buttonSesion = document.getElementsByClassName("button-sesion");
    const userData = getCookie('userData');

    if (userData) {
        const user = JSON.parse(decodeURIComponent(userData).substring(2));
        signButton.textContent = 'Signout';

        const greeting = document.createElement('span');
        greeting.textContent = 'Hola, ' + user.first_name;

        buttonSesion.insertBefore(greeting, signButton);
    } else {
        signButton.textContent = 'Signin';
    }

    signButton.addEventListener('click', () => {
        console.log("click")
        if (signButton.textContent === 'Signout') {
            window.location.href = "/logout";
        } else {
            window.location.href = "/login";
        }
    });
})

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}