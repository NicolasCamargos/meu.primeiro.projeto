//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

let Vitorias = 105
let Derrotas = 10

let vitoriasEDerrotas = vitoriaReal(Vitorias, Derrotas)

function vitoriaReal(vitorias, derrotas){
	let vitoriaReais = vitorias - derrotas
    return vitoriaReais
    }
    
if(vitoriasEDerrotas < 10 ){
	console.log("O Herói tem saldo de " + vitoriasEDerrotas + " vitórias e está no nível de Ferro");
}
    
else if(vitoriasEDerrotas < 20 ){
	console.log("O Herói tem saldo de " + vitoriasEDerrotas + " vitórias e está no nível de Bronze");
}
    
else if(vitoriasEDerrotas < 50 ){
	console.log("O Herói tem saldo de " + vitoriasEDerrotas + " vitórias e está no nível de Prata");
}

else if(vitoriasEDerrotas < 80 ){
	console.log("O Herói tem saldo de " + vitoriasEDerrotas + " vitórias e está no nível de Ouro");
}

else if(vitoriasEDerrotas < 90 ){
	console.log("O Herói tem saldo de " + vitoriasEDerrotas + " vitórias e está no nível de Diamante");
}

else if(vitoriasEDerrotas < 90){
	console.log("O Herói tem saldo de " + vitoriasEDerrotas + " vitórias e está no nível de Lendário");
}

else if(vitoriasEDerrotas <= 100 ){
	console.log("O Herói tem saldo de " + vitoriasEDerrotas + " vitórias e está no nível de Imortal");
}  

