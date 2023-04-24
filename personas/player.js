// criar player
let yPlay1 = 460, xPlay1= 100, colisao = false;
let placar = 0;

// exibir o jogador
function mostraPlay1(){
  image(imagemPlay1, xPlay1, yPlay1, 30, 30);
}

// criar o pontos
function mostraPlacar(){
  textAlign(CENTER);
  textSize(45);
  fill(color(255, 240,0));
  text(placar, width/2 , 40);
}

// movimentar jogador
function moverPlay1(){
  if (keyIsDown(UP_ARROW)){
    yPlay1 -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if (moverParaBaixo()){
      yPlay1 += 3;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    xPlay1 -= 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xPlay1 += 3;
  }
  if(yPlay1 < 11){
    placar += 1;
    somPontos.play();
    textSize(60);
    yPlay1 = 460;
    textSize(45);
  }
}

// vitoria
function ganhou(){
  if (placar == 10){
    image(imagemVitoria, 90, 60, 350, 100);
  }
}

// criar interação do carro com o ator
function verificarColisao(){
  for (let i = 0; i < xCarro.length; i++){
    colisao = collideRectCircle(xCarro[i], yCarro[i], comprimentoCarro, alturaCarro, xPlay1, yPlay1, 20);
    if (colisao){
      yPlay1 = 460;
      somColisao.play();
      if (perderPontos()){
        placar -= 1;
      }
    }
  }
}

// impedir de descer mais que o limite da borda
function moverParaBaixo(){
  return yPlay1 < 460;
}

// limitar a perda de pontos abaixo de 0
function perderPontos(){
  return placar > 0;
}