/*Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos
internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false,
caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.*/

const a = 0
const b = 46
const c = 90

if(a <= 0 || b <= 0 || c <= 0){
    console.log("Esse não é um triângulo válido")
}
else if(a + b + c == 180){
    console.log("True")
}
else if(a + b + c !== 180){
    console.log("False")
}