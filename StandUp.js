function encontrarGanhador(participanteA, votosA, participanteB, votosB) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;
    
    for(let i = 0; i < votosA.length; i++) {
        if(votosA[i] > votosB[i]) {
            pontosPrimeiroParticipante++;
            
        } else if(votosA[i] < votosB[i]) {
            pontosSegundoParticipante++;
            
        } else {
            continue;
        }
    }
    
    let ganhador = pontosPrimeiroParticipante > pontosSegundoParticipante ? participanteA:participanteB;
    
    return ganhador;
}


const nomeA = "Alicia";
const nomeB = "Bob";
const votosA = [23, 69, 32];
const votosB = [12, 67, 43];

console.log("O ganhador é: " + encontrarGanhador(nomeA, votosA, nomeB, votosB));