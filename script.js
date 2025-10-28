// ForEach
const arrName = ["andré", "rubens", "paula", "bia"]

arrName.forEach((nome, index) => console.log(index + " " + nome.toUpperCase()));

// Map
const arrNum = [123, 3245, 456, 2933]

const arrMap = arrNum.map((number) => number * 2)

console.log(arrMap)

// Reduce
const totalArr = arrNum.reduce((i, number) => i + number, 0)

console.log(totalArr)

// Filter
const result = arrNum.filter((number) => number > 500)

console.log(result)

// Inverter array
const arr = [1, 2, 3, 4, 5]

console.log(arr)

const arrInv = []

for(i = arr.length - 1; i >= 0; i--) {
    arrInv.push(arr[i])
}

console.log(arrInv)

// Inverter string
const palavra = "abc"

const arrPalavra = palavra.split("")

const arrPalavraInv = []

console.log(arrPalavra)

for(i = arrPalavra.length - 1; i >= 0; i--) {
    arrPalavraInv.push(arrPalavra[i])
}

const palavraInv = arrPalavraInv.join("")

console.log(palavraInv)

// Numeros primos na array

const arrPrim = [1, 34, 3, 234652, 321, 13, 7]

arrPrim.forEach((num) => {
    if(num % 2 === 1){
        console.log(`O número ${num} é primo!`)
    } else {
        console.log(`O número ${num} não é primo!`)
    }
})

// Somar apenas primos
let sumPar = 0

arrPrim.forEach((num) => {
    if(num % 2 === 0){
        sumPar = sumPar + num
    }   
})

console.log("O a soma dos números pares dentro da array é: " + sumPar)

// Contar caracter numa frase

const frase = "Este texto foi criado aleatoriamente para um teste de estagio"

let count = 0

const fraseSemEsp = frase.split(" ").join("")

const fraseArr = fraseSemEsp.split('')

const letraDesejada = "a"

fraseArr.forEach((letra) => {
    if(letra === letraDesejada) {
        count++
    }
})

console.log(`A letra ${letraDesejada} na frase: "${frase}" foi repetida ${count} vezes`)

// Saber se a palavra é palindromo
const palavraPalindromo = "radar"

const arrPalavraPalindromo = palavraPalindromo.split("")

const arrPalavraPalindromoInvertida = []

for(i = arrPalavraPalindromo.length - 1; i >= 0; i--) {
    arrPalavraPalindromoInvertida.push(arrPalavraPalindromo[i])
}

const palavraInvertida = arrPalavraPalindromoInvertida.join("")

if(palavraInvertida === palavraPalindromo) {
    console.log("A palavra é um palindromo!")
} else {
    console.log("A palavra não é um palindromo!")
}

// Se é divisivel por 3 Fizz se for por 5 Buzz ambas FizzBuzz

for(i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i + ": FizzBuzz!")
    } else if(i % 3 === 0) {
        console.log(i + ": Fizz")
    } else if(i % 5 === 0) {
        console.log(i + ": Buzz")
    } else {
        console.log(i + ": n/a")
    }
}

// Menor a maior numero numa array

const arrRandomNumbers = [12, 453, 123, 734, 752, 12, 5, 2, 643, 23]

let maxNumber = 0
let minNumber = arrRandomNumbers[0]

arrRandomNumbers.forEach((num) => {
    if(num > maxNumber) maxNumber = num 
    if(num < minNumber) minNumber = num
})

console.log(`O maior número da array é: ${maxNumber} o menor é: ${minNumber}`)

// Contar vogais numa frase

let countVogal = 0

fraseArr.forEach((letra) => {
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        countVogal++
    }
})

console.log("O número de vogais na frase é de: " + countVogal)

// Remover numeros repetidos

const arrayNumbers  = [1, 1, 2, 2, 3, 4, 4, 4, 5]

const newArrNumbers = []

arrayNumbers.forEach((num) => {
    if(!newArrNumbers.includes(num)){
        newArrNumbers.push(num)
    }
})

console.log(newArrNumbers)

// Remover strings repetidas

const arrayFrutas = ["Maça", "Banana", "Maça", "Mamão", "Mamão"]

const newArrayFrutas = []

arrayFrutas.forEach((fruta) => {
    if(!newArrayFrutas.includes(fruta)){
        newArrayFrutas.push(fruta)
    }
})

console.log(newArrayFrutas)