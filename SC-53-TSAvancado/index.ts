// 1 - arrays
let numbers: number[] =  [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

// numbers = "teste"

const nomes: string[] = ["Matheus", "João"]

// nomes.push(4)

// 2 - outra sintaxe de array
const nums: Array<number> = [100, 200]

nums.push(300)

// nums.push("400")

console.log(nums[1])

// 3 - any
const arr1: any = [1, "teste", [], true, {nome:"André"}]

console.log(arr1)

arr1.push([1, 2, 3])

// 4 - parametros tipados

function soma(a: number, b: number){
    console.log(a + b)
}

soma(2, 4)

// soma("a", "b")

// 5 - tipando retorno de funcoes

function greetings(name: string): string{
    return `Olá ${name}`
}

console.log(greetings("Matheus"))

// 6 - funcao anonima
setTimeout(function() {
    const sallary: number = 1000

    // console.log(parseFloat(sallary))
}, 2000)

// 7 - tipos de objeto
function passCoordinates(coord: {x: number, y: number}) {
    console.log("Coordenadas X: " + coord.x)
    console.log("Coordenadas Y: " + coord.y)
}

const objCord = {x: 321, y: 21}

passCoordinates(objCord)

// 8 - props opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if(c){
       console.log("C: " + c)
    }
}

showNumbers(1, 2, 3)
showNumbers(4, 5)

// 9 - validando props opcionais
function advancedGreeting(firstName: string, lastName?: string){
    if(lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`
}

advancedGreeting("Matheus", "Battisti")
advancedGreeting("Matheus")

// 10 - union type
function showBalance(balance: number | string) {
    console.log(`O saldo é R$${balance}`)
}

showBalance(100)
showBalance("500")

const arr2: Array<number | string | boolean> = [1, "teste", true]

// 11 - avançando em union types
function showUserRole(role: boolean | string) {
    if(typeof role === "boolean"){
        return "Usuario não aprovado!"
    }

    return `A função do funcionario é ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - type alias
type ID = string | number

function showId(id: ID) {
    console.log(`O id é ${id}`)
}

showId(1)
showId("200")

// 13 - interface
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`)
}

const coordObj: Point = {
    x: 10,
    y: 15, 
    z: 5
}

showCoords(coordObj)

// 14 - interface x type allias
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Matheus", age: 30}

console.log(somePerson)

type PersonType = {
    name: string
}

/*
type PersonType = {
    age: number
}
*/

// 15 - literal type
let teste: "testando"

teste = "testando"

console.log(teste)

function showDirection(direction: "left" | "right" | "center"){
    console.log(`A direção é ${direction}`)
}

showDirection("left")

// 16 - non null
const p = document.getElementById("some-p")

console.log(p!.innerText)

// 17 - bigint
let n: bigint

// n = 1

n = 1000n

console.log(n)
console.log(typeof n)
console.log(n + 100n)

// 18 - symbol
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("b")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)
