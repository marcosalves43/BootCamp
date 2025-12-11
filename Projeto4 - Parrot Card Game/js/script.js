let numeroDeCartas = null;

while (true) {
  numeroDeCartas = Number(prompt("Com quantas cartas você quer jogar? (Escolha um número par entre 4 e 14)"));

  if (
    !isNaN(numeroDeCartas) && 
    numeroDeCartas % 2 === 0 && 
    numeroDeCartas >= 4 &&
    numeroDeCartas <= 14 
  ) {
    break; 
  }

  alert("Número inválido! Tente novamente.");
}


const imgagensCartas = ["parrot1" , "parrot2", "parrot3", "parrot4", "parrot5", "parrot6", "parrot7"];

const CartasSelecionadas = imgagensCartas.slice( 0 , numeroDeCartas / 2);
const cartasDuplicadas = [...CartasSelecionadas, ...CartasSelecionadas];


cartasDuplicadas.sort(comparador); 


function comparador() { 
	return Math.random() - 0.5; 
}

  const container = document.querySelector(".game-container");


cartasDuplicadas.forEach( aparecerCartas =>{
  const criaDiv = document.createElement("div");
  criaDiv.classList.add("card");
  criaDiv.addEventListener("click", virarCarta);
  criaDiv.innerHTML = `
    <div class="front-face">
      <img src="imagens/${aparecerCartas}.png" alt="Carta frente" />
    </div>
    <div class="back-face">
      <img src="imagens/back.png" alt="Carta verso" />
    </div>
  `;
  container.appendChild(criaDiv);
}) ;


primeiraCarta = null;
segundaCarta = null;
trava = false;


function virarCarta(){
  this.classList.toggle("flip");
    
  }









