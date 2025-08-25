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