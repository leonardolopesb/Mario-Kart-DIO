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

// Função pra sortear os personagens
async function getRandomCharacter() {
  const characters = [Mario, Luigi, Peach, Yoshi, DonkeyKong, Bowser];
  const player1 = Math.floor(Math.random() * characters.length);

  // Removendo o personagem sorteado para o player1 para garantir que o player2 seja diferente
  let player2;

  do {
    player2 = Math.floor(Math.random() * characters.length);
  } while (player2 === player1);

  return [characters[player1], characters[player2]];
}

// Função para sortear o número do dado (de 1 a 6)
async function getRollDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// Função para sortear o bloco de corrida (de 1 a 3)
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

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} jogou um dado 🎲 de número ${diceResult} no bloco de ${block}. Como o ${characterName} já possui ${attribute} pontos de ${block}, ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`\t\t\t🏁 ${round}ª rodada\n`);

    // Sorteando o bloco de corrida
    let block = await getRandomBlock();
    console.log(`Bloco de corrida sorteado: ${block}\n`);

    // Testando habilidade, partindo sempre do zero
    let playerSkill1 = 0;
    let playerSkill2 = 0;

    // Rolando os dados
    let diceResult1 = await getRollDiceNumber();
    let diceResult2 = await getRollDiceNumber();

    if (block === "RETA") {
      playerSkill1 = diceResult1 + character1.VELOCIDADE;
      playerSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "Velocidade",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "Velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }

    else if (block === "CURVA") {
      playerSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      playerSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "Manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        "Manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }

    else {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

      await logRollResult(
        character1.NOME,
        "Poder",
        diceResult1,
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        "Poder",
        diceResult2,
        character2.PODER
      );

      if (powerResult1 > powerResult2) {
        if (character2.PONTOS > 0) {
          console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`);
          character2.PONTOS--;
        } else {
          console.log(`${character1.NOME} venceu o confronto, mas ${character2.NOME} não tem pontos para perder! 🐢`);
        }
      }
      
      else if (powerResult2 > powerResult1) {
        if (character1.PONTOS > 0) {
          console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`);
          character1.PONTOS--;
        } else {
          console.log(`${character2.NOME} venceu o confronto, mas ${character1.NOME} não tem pontos para perder! 🐢`);
        }
      } else {
        console.log(`O confronto terminou empatado! Nenhum ponto foi perdido. 🐢`);
      }
    }

    // Declarando o vencedor da rodada
    if (playerSkill1 > playerSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (playerSkill2 > playerSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    } else {
        if(block !== "CONFRONTO")
          console.log(`A rodada terminou empatada! Nenhum ponto foi marcado.`);
    }

    console.log(
      `\nPlacar: ${character1.NOME} - ${character1.PONTOS} | ${character2.NOME} - ${character2.PONTOS}`
    );

    if(round != 5)
      console.log("\n\t\t---------------------------\n\n\t\tVamos para uma nova rodada!\n\n\t\t---------------------------\n");
    else
      console.log("\n\t\t---------------------------\n\n\t\tFim da corrida! 🚨🚨🚨🚨🚨\n\n\t\t---------------------------\n");
  }
}

// Função para declarar o vencedor da corrida
async function declareWinner(character1, character2) {
  console.log("\nResultado final:\n");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)\n`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character2.PONTOS > character1.PONTOS)
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate! Nenhum vencedor desta vez! 🏁");
}

// Função auto-declarável principal para iniciar o jogo
(async function main() {
  const [player1, player2] = await getRandomCharacter();

  console.log(
    `\n🏁🚨 Vai começar a corrida!\nOs jogadores escolhidos foram: ${player1.NOME} e ${player2.NOME}\n`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();