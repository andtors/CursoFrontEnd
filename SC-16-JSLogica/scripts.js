// 1 - Variaveis
let nome = "Matheus"
console.log(nome)
nome = "Matheus Battisti"
console.log(nome)

const idade = 31
console.log(idade)
// idade = 32

console.log(typeof nome)
console.log(typeof idade)

// 2 - mais sobre variaveis
// let 2teste = "invalido"
// let @teste = "invalido"

let a = 30,
    b = 20,
    c = 30

console.log(a, b, c)

const nomeCompleto = "Matheus Battisti"
const nomecompleto = "João da Silva"
console.log(nomeCompleto)
console.log(nomecompleto)

let _teste = "ok"
let $teste = "ok"

console.log(_teste, $teste)

// 3 - Prompt
//const age = prompt("Digite sua idade:")
//console.log(`Você tem ${age} anos`)

// 4 - Alert
//alert("Testando")

const z = 10
//alert(`O numero é ${z}`)

// 5 - Math
console.log(Math.max(5, 2, 1, 10))
console.log(Math.floor(5.14))
console.log(Math.ceil(5.14))

// 6 - Console
console.log("Teste!")
console.error("ERRO!")
console.warn("Atenção!")

// 7 - if
const m = 10

if(m > 5){
    console.log("M é maior que 5!")
}

const user = "João"

if(user === "João"){
    console.log("Olá João!")
}

user === "Maria" ? console.log("É a maria!") : console.log("Não é a Maria")

// 8 - else
const loggedIn = false

loggedIn ? console.log("Está autenticado!") : console.log("Não  está autenticado")

const q = 10
const w = 25

q > 5 && w > 20 ? console.log("Números mais altos") : console.log("Os número não são mais altos")

// 9 - else if
if(1 > 2){
    console.log("teste")
} else if (2 > 3){
    console.log("teste 3") 
} else if (5 > 1){
    console.log("Agora sim!")
}

const userName = "Matheus"
const userAge = 31

if(userName === "José"){
    console.log("Bem vindo José!")
} else if (userName === "Matheus" && userAge === 31){
    console.log("Olá Matheus, você tem 31 anos!")
}

// 10 - While
let p = 0

while(p < 5){
    console.log(`Repetindo ${p}`)
    p++
}

// 11 - doWhile
let o = 10

do {
    console.log(`O valor de o: ${o}`)
    o--
} while (o > 1);

// 12 - for
for(i = 0; i < 5; i++){
    console.log(`O valor de i é: ${i}`)
}

// 13 - identação
for(let u = 0;u < 10; u++){
    if(u * 2 > 10){
        console.log(`Maior que 10! ${u}`)
    } else {
        if(u / 2 === 0){
            console.log("Deu 0!")
        }
    }
}

// 14 - Saindo de um loop (break)
for(let g = 20; g > 10; g--){
    console.log(`O valor de g é: ${g}`)
    if(g === 12){
        console.log("O g é 12!")
        break
    }
}

// 15 - continue
for(let f = 0; f < 10; f++){
    if(f % 2 === 0){
        console.log("Número par!")
        continue
    }

    console.log(f)
}

// 16 - Switch
const job = "Advogado"

switch(job){
    case "Programador":
        console.log("Você é um programador!")
        break
    case "Advogado":
        console.log("Você é um advogado!")
        break
    case "Engenheiro":
        console.log("Você é um engenheiro!")
        break
    default:
        console.log("Profissão não encontrada!")
}
