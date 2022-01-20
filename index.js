// const meuJson = require('./teste.json')

const match = require("nodemon/lib/monitor/match");


// let teste = 5;
// const pi = 3.14;
const usuario = {
    nome: 'Hector',
    idade: 18,
};

// const usuarios = [];

// usuario.nome = 'Hector Teste';
// usuario.altura = `2m`;

// // ctrl + k + c
// // ctrl + k + u
// // usuario = {
// //     nome: 'Hector teste2'
// // }
// // condicao ? aqui : esse aqui

// let resposta = usuario.idade != 22 ? 'Voce pode entrar no restaurante' : 'Nao pode entrar no restaurante'

// // if(usuario.idade <= 22) {
// //     console.log('Voce pode entrar no restaurante');
// // } else if(usuario.idade == 23) {
// //     console.log('Nao pode entrar no restaurante')
// // } else if (usuario.idade == 24) {

// // }
// meuJson.meuArray[0].nome = 'Tsunode'
// console.log(meuJson);

// FUNCTION NORMAL
// function sintaxeMaior(primeiroNumero, segundoNumero) {
//     console.log(primeiroNumero + segundoNumero)
// }

// ARROW FUNCTION
// let somar = (primeiroNumero, segundoNumero) => console.log(primeiroNumero + segundoNumero);

// somar(2, 3)

const numeros = [1,2,5,8]

const novoArray = [];

// for() {
//     novoArray.push()
// }

let numerosMapeados = numeros.map((value, index) => {
    return value + index;
});

// console.log(numerosMapeados, numeros);

let numerosFiltrados = numeros.filter((valor) => valor === 5)

// console.log(numerosFiltrados);

let idades = [18, 10, 15, 32, 50];
const idadesMaioresQue18 = idades.filter((valor) => valor >= 18);
// console.log(idadesMaioresQue18);

const usuarios = [
    {
        nome: 'Hector',
        idade: 18,
    },
    {
        nome: 'Rafael',
        idade: 21,
    },
    {
        nome: 'Ana',
        idade: 23,
    }
]

const usuariosCom2anosMais = usuarios.map((usuario) => usuario.idade + 2);

console.log(usuariosCom2anosMais);