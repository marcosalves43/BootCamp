function selecionarPedido(elemento) {
	const categoria = getCategoria(elemento);

	const selecionado = document.querySelector(`.${categoria}.ativo`);
	if (selecionado !== null) {
		selecionado.classList.remove("ativo");
	}

	elemento.classList.add("ativo");
}

function getCategoria(elemento) {
	if (elemento.classList.contains("prato")) return "prato";
	if (elemento.classList.contains("bebida")) return "bebida";
	if (elemento.classList.contains("sobremesa")) return "sobremesa";
}


function validarPedido(){
const loading =document.querySelector('.pedido-final')
loading.classList.remove("escondido")

const mensagem =document.querySelector('.botao-pedidos')
mensagem.innerHTML ="Fechar pedido"

}