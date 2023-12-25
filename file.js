// _____________________________________________________
//          Desafio: Classifique seu héroi!
// -----------------------------------------------------
let playerName = 'Harry';
let playerPoints = 0;


console.log(`\n>> Bem vindo héroi: ${playerName}, você precisa salvar a princesa na torre.\n`);

// _____________________________________________________
//                 Primeiro turno!
// -----------------------------------------------------

console.log("____________________________________________________________________________________________")
console.log("\n>> Seguindo pela trilha você avistou duas entradas de acesso, (1)Pântano ou (2)Floresta \n")

let escolha = 2;

if (escolha === 1) {

    let valorBossLocal = 4000;

    console.log(`Neste local fedido e mendonho, você acaba encontrando algumas criaturas como jacarés de Ares e hipopótamos fantasmas. \n\n > Parabéns, com suas habilidades incriveis, conseguiu lidar com eles, e ganhou ${valorBossLocal} pontos <`);
    playerPoints = valorBossLocal;
    console.log("____________________________________________________________________________________________")

} else if (escolha === 2) {

    let valorBossLocal = 7000;

    console.log(`Neste local com diversas arvores e clima sinistro, você se encontra com alguns leões de fogo e serpentes de acido. \n\n > Parabéns, com suas habilidades incriveis, conseguiu lidar com eles, e ganhou ${valorBossLocal} pontos <`)
    playerPoints = valorBossLocal;
    console.log("____________________________________________________________________________________________")

} else {
    console.error("Escolha errada heroi, reset o game!");
    
}

// _____________________________________________________
//                 Segundo turno!
// -----------------------------------------------------

console.log(`\n>> Parabens, heroi ${playerName}. Alcançou a ponte ligada a torre, mas no caminho encontrou um papel... me parece util.\n >> No caminho ate a torre, tentou decifrar aquele papel... Um codigo! Mas do que seria ? Questão respondida pelo suspeita porta a fim da ponte, codigos numerico logo a frente, digite heroi...\n \n "`)



for(let codigosDigitados = 1; codigosDigitados <= 6; codigosDigitados++ ){
    console.log(`${codigosDigitados}\n `);
    var playerPointsFinal = playerPoints + 1000;
}

console.log('\nPorta destravada, acesso concedido siga em frente heroi a princesa te espera... \n')

if (playerPointsFinal <= 1000){
    console.log(`Parabens por concluir o desafio, seu nivel de heroi é: Ferro`)
} 

else if (playerPointsFinal <= 2000){
    console.log(`Parabens por concluir o desafio, seu nivel de heroi é: Bronze`)
}

else if (playerPointsFinal <= 5000){
    console.log(`Parabens por concluir o desafio, seu nivel de heroi é: Prata`)
}

else if (playerPointsFinal <= 7000){
    console.log(`Parabens por concluir o desafio, seu nivel de heroi é: Ouro`)
}

else if (playerPointsFinal <= 8000){
    console.log(`Parabens por concluir o desafio, seu nivel de heroi é: Platina`)
}

else if (playerPointsFinal <= 9000){
    console.log(`Parabens por concluir o desafio, seu nivel de heroi é: Ascendente`)
}

else if (playerPointsFinal <= 10000){
    console.log(`Parabens por concluir o desafio, seu nivel de heroi é: Imortal`)
}

else if (playerPointsFinal > 10000){
    console.log(`Parabens por concluir o desafio, seu nivel de heroi é: Radiante`)
}
