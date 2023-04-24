function setup() {
  createCanvas(500, 500);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraPlacar();
  mostraPlay1();
  movimentaCarros();
  loopDosCarros();
  moverPlay1();
  mostraCarro();
  verificarColisao();
  ganhou();
}