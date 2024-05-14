const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularRank (saldoDeVitorias) {
    if(saldoDeVitorias <= 10){
        return "Ferro";
    } else if(saldoDeVitorias <= 20 ){
        return "Bronze";
    } else if(saldoDeVitorias <= 50){
        return "Prata";
    } else if(saldoDeVitorias <= 80){
        return "Ouro";
    } else if(saldoDeVitorias <= 90){
        return "Diamante"
    } else if(saldoDeVitorias <= 100){
        return "Lendário"
    } else {
        return "Imortal"
    }
}

readline.question(`Qual o número de vitórias? -> `, resVitorias => {
    let vitorias;
    let derrotas;
    if (isNaN(Number(resVitorias))) {
        console.log("O número de vitórias deve ser um número!");
        return readline.close();
    } else {
        vitorias = Number(resVitorias);
    }

    readline.question(`Qual número de derrotas? ->`, resDerrotas => {
        
        if( isNaN(Number(resDerrotas))) {
            console.log("O número de derrotas deve ser um número!");
            return readline.close();
        } else {
            derrotas = Number(resDerrotas);
            saldo = vitorias - derrotas;
            rank = calcularRank(saldo);
            console.log(`O Herói tem saldo de ${saldo} e está no nível ${rank}.`);
            readline.close();
        }

    });
});