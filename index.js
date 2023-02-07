let grupo1;
let grupo2;
let grupo3;

let bbTFL1;
let bbTFL2;

let bagp1Comando;
let bagp1Status;
let bagp1Falha;

let bagp2Comando;
let bagp2Status;
let bagp2Falha;

let bagp3Comando;
let bagp3Status;
let bagp3Falha;

let bagp4Comando;
let bagpStatus;
let bagp4Falha;

if (grupo1 == true && (bbTFL1 == true || bbTFL2 == true)){
    if(bagp2Status == false && bagp2Falha == false){
        bagp2Comando = true
    }
    else if(bagp3Status == false && bagp3Falha == false){
        bagp3Comando = true
    }
    else if(bagp4Status == false && bagp4Falha == false){
        bagp4Comando = true
    }
    else{
        console.log('Nenhuma Bomba Disponível')
    }
}

if (grupo2 == true && (bbTFL1 == true || bbTFL2 == true)){
    if(bagp1Status == false && bagp1Falha == false){
        bagp1Comando = true
    }
    else if(bagp3Status == false && bagp3Falha == false){
        bagp3Comando = true
    }
    else if(bagp4Status == false && bagp4Falha == false){
        bagp4Comando = true
    }
    else{
        console.log('Nenhuma Bomba Disponível')
    }
}

if (grupo3 == true && (bbTFL1 == true || bbTFL2 == true)){
    if(bagp1Status == false && bagp1Falha == false){
        bagp1Comando = true
    }
    else if(bagp2Status == false && bagp2Falha == false){
        bagp2Comando = true
    }
    else if(bagp4Status == false && bagp4Falha == false){
        bagp4Comando = true
    }
    else{
        console.log('Nenhuma Bomba Disponível')
    }
}