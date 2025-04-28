// 1 - Number
console.log(typeof(2))
console.log(typeof(123))
console.log(typeof(-12))

// 2 - OPs aritmeticas
console.log(2 + 4)
console.log(10 - 5)
console.log(5 * 4)
console.log(10 / 2)
console.log(5 + (4 * 2))

// 3 - Special Numbers
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log("qsd" * 123)
console.log(typeof NaN)

// 4 - Strings
console.log(typeof "Um texto")
console.log('Mais um texto')
console.log("123")

// 5 - Simbolos especiais em strings
console.log("Testando a \nquebra de linha")
console.log("Espaçamento de \ttab")

// 6 - Concatenação
console.log("Oi," + " tudo" + " bem?")
console.log("Testando" + ' com' + " crase!")

// 7 - Template String / Interpolação
console.log(`A soma de 2 + 2 é:  ${2 + 2}`)
console.log(`Podemos executar qualquer coisa aqui: ${console.log("teste")}`)

// 8 - Booleanos
console.log(true)
console.log(5 > 20)
console.log(30 > 10)

// 9 - Comparações
console.log(5 <= 5)
console.log(5 < 5)
console.log(10 == 10)
console.log(10 == 9)
console.log(10 != 9)


// 10 - Comparação identico
console.log(9 == "9")
console.log(9 === "9")
console.log(9 != "9")
console.log(9 !== "9")

// 11 - Operadores lógicos
console.log(true && true)
console.log(true && false)

console.log(5 > 2 && 2 < 10)
console.log(5 > 2 && "Matheus" === 1)
console.log(5 > 2 || "Matheus" === 1)
console.log(5 < 2 || 5 > 100)
console.log(!true)

// 12 - Empty values
console.log(typeof null, typeof undefined)
console.log(null === undefined)
console.log(null == undefined)
console.log(null == false)
console.log(undefined == false)

// 13 - Conversão automatica
console.log(5 * null)
console.log("teste" * "opa")
console.log("10" + 1)
console.log("10" - 1)

