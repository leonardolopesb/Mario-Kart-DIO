# 🏎️ Mario Kart com Node.JS

<table>
    <tr>
        <td>
            <img src="./img/header.gif" alt="Header do Mario Kart" margin="auto" width="200px">
        </td>
        <td>
            <p>Um mini-jogo de corrida consolidado em Node.js e seus fundamentos com personagens inspirados no universo do Mario. É uma interação divertida que envolve sorte, confrontos e atributos como velocidade, manobrabilidade e poder.
            </p>
        </td>
    </tr>
</table>


## 🎮 Como funciona o jogo

#### Os personagens são devidamente caracterizados pelos seguintes atributos: `VELOCIDADE`, `MANOBRABILIDADE`, `PODER` e `PONTOS`.

#### No começo da partida, dois personagens são aleatoriamente sorteados. A corrida possui 5 rodadas, e cada uma delas é composta por um bloco de corrida aleatório:
- **RETA**: Usa o atributo `VELOCIDADE`
- **CURVA**: Usa o atributo `MANOBRABILIDADE`
- **CONFRONTO**: Usa o atributo `PODER`, a fim de gerar um duelo entre os personagens

#### E em cada rodada:
- Os dois jogadores rolam um dado de 1 a 6 🎲
- O valor do dado é somado ao atributo do bloco sorteado
- Quem tiver o maior valor ganha a rodada e marca 1 `PONTO`
- No caso de confronto, o perdedor pode perder 1 `PONTO`, caso haja `PONTOS`

### No final das 5 rodadas, o personagem com mais pontos vence! 🏆


## 👾 Personagens disponíveis

<table style="border-collapse: collapse; width: 800px; margin: 0.5rem;">
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Mario</p>
            <img src="./img/mario.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 4</p>
            <p>Manobrabilidade: 3</p>
            <p>Poder: 3</p>
        </td>
            <td style="border: 1px solid black; text-align: center;">
            <p>Peach</p>
            <img src="./img/peach.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 3</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 2</p>
        </td>
            <td style="border: 1px solid black; text-align: center;">
            <p>Yoshi</p>
            <img src="./img/yoshi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 2</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 3</p>
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Bowser</p>
            <img src="./img/bowser.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 5</p>
            <p>Manobrabilidade: 2</p>
            <p>Poder: 5</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Luigi</p>
            <img src="./img/luigi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 3</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 4</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Donkey Kong</p>
            <img src="./img/dk.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 2</p>
            <p>Manobrabilidade: 2</p>
            <p>Poder: 5</p>
        </td>
    </tr>
</table>      

## 📜 Exemplo de execução no Terminal (com somente três rodadas)

```bash
🏁🚨 Vai começar a corrida!
Os jogadores escolhidos foram: Mario e Luigi
```

```bash
🏁 1ª rodada
Bloco de corrida sorteado: RETA

Mario jogou um dado 🎲 de número 2 no bloco de Velocidade. Como o Mario já possui 4 pontos de Velocidade, 2 + 4 = 6
Luigi jogou um dado 🎲 de número 5 no bloco de Velocidade. Como o Luigi já possui 3 pontos de Velocidade, 5 + 3 = 8

No total da rodada, Luigi possui mais pontos de Velocidade que Mario!
Luigi marcou um ponto!

Placar: Mario - 0 | Luigi - 1
```

```bash
🏁 2ª rodada
Bloco de corrida sorteado: CURVA

Mario jogou um dado 🎲 de número 4 no bloco de Manobrabilidade. Como o Mario já possui 3 pontos de Manobrabilidade, 4 + 3 = 7
Luigi jogou um dado 🎲 de número 2 no bloco de Manobrabilidade. Como o Luigi já possui 4 pontos de Manobrabilidade, 2 + 4 = 6

No total da rodada, Mario possui mais pontos de Manobrabilidade que Luigi!
Mario marcou um ponto!

Placar: Mario - 1 | Luigi - 1
```

```bash
🏁 3ª rodada
Bloco de corrida sorteado: CONFRONTO

Mario jogou um dado 🎲 de número 1 no bloco de Poder. Como o Mario já possui 3 pontos de Poder, 1 + 3 = 4
Luigi jogou um dado 🎲 de número 5 no bloco de Poder. Como o Luigi já possui 4 pontos de Poder, 5 + 4 = 9

Luigi venceu o confronto! Mario perdeu 1 ponto 🐢

Placar: Mario - 0 | Luigi - 1
```

```bash
Fim da corrida! 🚨🚨🚨🚨🚨

Resultado final:
Mario: 0 ponto(s)
Luigi: 1 ponto(s)
```

```bash
Luigi venceu a corrida contra Mario por 1 ponto(s) de diferença!
Parabéns Luigi! 🏆
```

## 🚀 Como executar

1. Copie o código para um arquivo `.js` (ex: `index.js`)
2. Execute no terminal com Node.js:

```bash
node index.js
```

## 🛠️ Requisitos

Para executar o jogo corretamente, você precisa ter:

- ✅ Node.js instalado (versão 14 ou superior)
- ✅ Um terminal compatível com UTF-8 para exibir os emojis sem nenhum bug visual 🎲 🏁 🏆

<img src="./img/ending.gif" alt="Header do Mario Kart" margin="0 auto" width="400px">
