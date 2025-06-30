// Personagens do jogo
const Mario = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const Luigi = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const Peach = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

const Yoshi = {
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const DonkeyKong = {
  NOME: "Donkey Kong",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const Bowser = {
  NOME: "Bowser",
  VELOCIDADE: 5,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

// Função para sortear o número do dado (de 1 a 6)
async function getRollDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// Função para sortear a pista de corrida (de 1 a 3)
async function getRandomBlock() {
  let random = Math.floor(Math.random() * 3) + 1;
  let block;

  if (random === 1)
    block = "RETA";
  else if (random === 2)
    block = "CURVA";
  else
    block = "CONFRONTO";

  return block;
}