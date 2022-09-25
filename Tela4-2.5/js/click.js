function menu() {
    document.getElementById("Botao").classList.toggle('open');
}

function esconder() {
    if (document.getElementById("valor").innerText == "R$ 12.345,00") {
			document.getElementById("valor").innerText = "R$ ****"
		} else {
			document.getElementById("valor").innerText = "R$ 12.345,00";
		}
}