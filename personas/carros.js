// criar carros
let xCarro = [490, -35, 490, -35, 490, -35];
let yCarro = [405, 330, 265, 195, 130, 60];
let limite = [550, -50];
let comprimentoCarro = 60;
let alturaCarro = 40;

// exibir os carros
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro);
  }
}

// movimentar carros
function movimentaCarros(){
  let vel = [7, 6, 6, 5, 4, 7];
  for (let i = 0; i < xCarro.length; i++){
    if (i % 2 == 0){
      xCarro[i] -= vel[i];
    } else {
      xCarro[i] += vel[i]; 
    }
  }
}

// manter os carros passando
function loopDosCarros(){
  for (let i = 0; i < xCarro.length; i++){
    if (i % 2 == 0){
      if(xCarro[i] < limite[1]){
        xCarro[i] = 490;
      }
    } else {
      if(xCarro[i] > limite[0]){
        xCarro[i] = -35;
      }
    }
  }
}