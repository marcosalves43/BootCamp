let numeroDeCartas;

while (true) {
  numeroDeCartas = Number(prompt("Com quantas cartas deseja jogar? (4 a 14, apenas pares)"));

  if (
    !isNaN(numeroDeCartas) && 
    numeroDeCartas >= 4 &&    
    numeroDeCartas <= 14 &&   
    numeroDeCartas % 2 === 0  
  ) {
    break; 
    }

  alert("Valor inválido! Digite um número par entre 4 e 14.");
}

let cartas = [
  "img/front.png",
  "img/front.png",
  "img/front.png",
  "img/front.png",
  "img/front.png"
]


function carregadorDeCartas(){
  const card = document.querySelector(".game-container")  
  card.innerHTML = ""  
  for(let i = 0; i < cartas.length; i++){
    card.innerHTML += `
      <div class="card" data-identifier="card">
      <img src="${cartas[i]}" alt="Carta ${i}" />
      </div>
    `
  }
}

