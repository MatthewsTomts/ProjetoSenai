function menu() {
    document.getElementById("Botao").classList.toggle('open');
}

function esconder() {
    if (document.getElementById("senha").getAttribute("type") == 'password') {
        document.getElementById("senha").setAttribute("type", "text");
    } else {
        document.getElementById("senha").setAttribute("type", "password");
    }
}