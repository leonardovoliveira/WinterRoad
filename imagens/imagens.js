// imagem da estrada
let imagemDaEstrada;

// placa de vitoria
let imagemVitoria;

// imagem dos carros
let imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6;

// sons do jogo
let somTrilha, somColisao, somPontos;
 
// imagem do jogador
let imagemPlay1;

// carregar imagens e sons do cenário e personas
function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemPlay1 = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarro4 = loadImage("imagens/carro-4.png");
  imagemCarro5 = loadImage("imagens/carro-5.png");
  imagemCarro6 = loadImage("imagens/carro-6.png");
  imagemVitoria = loadImage("imagens/vitoria.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
}