// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000 = Imortal
// Se XP for maior ou igual a 10.001 = Radiante 

let nomePersonagem = " Alberto"
let nivelPersonagem = 2587 

if(nivelPersonagem <= 1000){
	console.log("O herói de nome" + nomePersonagem + " está no nível Ferro");
}
    
else if(nivelPersonagem <= 2000){
	console.log("O herói de nome" + nomePersonagem + " está no nível Bronze");
}

else if(nivelPersonagem <= 5000){
	console.log("O herói de nome" + nomePersonagem + " está no nívelm Prata");
}

else if(nivelPersonagem <= 7000){
	console.log("O herói de nome" + nomePersonagem + " está no nível Ouro");
}

else if(nivelPersonagem <= 8000){
	console.log("O herói de nome" + nomePersonagem + " está no nível Platina");
}

else if(nivelPersonagem <= 9000){
	console.log("O herói de nome" + nomePersonagem + " está no nível Ascendente");
}

else if(nivelPersonagem <= 10000){
	console.log("O herói de nome" + nomePersonagem + " está no nível Imortal");
} 

else if(nivelPersonagem < 9999999999999999){
	console.log("O herói de nome" + nomePersonagem + " está no nível Radiante");
}


