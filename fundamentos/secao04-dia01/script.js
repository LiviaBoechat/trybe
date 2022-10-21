// ex01: Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para: adição, subtração, multiplicação, divisão e resto.

/* 
const a = 10;
const b = 5;

console.log(`A SOMA de ${a} e ${b} é: ` + (a + b)) //o + entre as aspas e a operação serve para CONCATENAR os dois elementos
console.log(`A SUBTRAÇÃO de ${a} e ${b} é: ` + (a - b))
console.log(`A MULTIPLICAÇÃO de ${a} e ${b} é: ` + (a * b))
console.log(`A DIVISÃO de ${a} e ${b} é: ` + (a / b))
console.log(`O RESTO da divisão entre ${a} e ${b} é: ` + (a % b))
*/

// ex02: Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

/* 
const n1 = 20;
const n2 = 100;

if (n1 > n2) {
    console.log("n1 é maior que n2")
}
else {
    console.log("n2 é maior que n1")
}
*/

// ex03: Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

/* 
const a = 10;
const b = 200;
const c = 30;

if (a > b && a > c) {
   console.log(a "é o maior entre os três números")
} 
else if (b > a && b > c) {
    console.log("b é o maior entre os três números")
}
else {
    console.log("c é o maior entre os três números")
}
*/

// ex04: Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

/* 
const e = 0

if (a > 0) {
    console.log("o valor é positivo!")
}
else if (a < 0) {
    console.log("o valor é negativo")
}
else {
    console.log("o valor é igual à zero")
}
*/

/* 
ex05: Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
-Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
-Um ângulo será considerado inválido se não tiver um valor positivo.
*/

/*
const f = -50;
const g = 50;
const h = 80;


if (f > 0 && g > 0 && h > 0) {
    if (f + g + h == 180) {
        console.log(`Os ângulos ${50}, ${50} e ${80} somam 180, então ` + "representam os ângulos internos de um triângulo")
    } else {
        console.log(`Os ângulos ${50}, ${50} e ${80} não somam 180, então ` + "NÃO representam os ângulos internos de um triângulo")
    }
} 
else {
    console.log("[ERRO] Ângulo negativo é inválido!")
}
*/

/* 
ex06: Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

- Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

/*
let xadrez = "Torre"

switch (xadrez.toLowerCase()) {
    case "rei":
        console.log("qualquer direção, uma casa por vez");
        break;
    case "dama" :
        console.log("qualquer direção, qts casas quiser");
        break;
    case "torre" :
        console.log("linha reta (vertical e horizontal), qts casas quiser");
        break;
    case "peão" :
        console.log("frente, uma casa por vez");
        break;
    case "bispo" :
        console.log("linha reta diagonal, qts casas quiser");
        break;
    case "cavalo" :
        console.log("L, pula 2 casas e para na terceira");
        break;
    case "rainha" :
        console.log("linha reta (vertical, horizontal e diagonal), qts casas quiser");
        break;
    default:
        console.log("[ERRO]Peça inválida!")    
}
*/

/*
ex.07 Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

/*
const nota = 200

if (nota >= 0 && nota <= 100) { 
    if (nota >= 90) {
        console.log("A");
    }
    else if (nota >= 80) {
        console.log("B");
    }
    else if (nota >= 70) {
        console.log("C");
    }
    else if (nota >= 60) {
        console.log("D");
    }
    else if (nota >= 50) {
        console.log("E");
    }
    else {
        console.log("F")
    }
}
else {
    console.log("[ERRO] Valor inválido!")
}
*/

// ex08. Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false. (Bonus: use somente um if.)

/*
const a = 11;
const b = 29;
const c = 30;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log(true)
}
else {
    console.log(false)
}
*/

// ex09. Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false. (Bonus: use somente um if.)

/*
const a = 10;
const b = 20;
const c = 30;

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    console.log(true)
}
else {
    console.log(false)
}
*/

/* 
ex10. Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto);
*/

/*
const custo = 1;
const venda = 3;

const quantidade = 1000;

let cTotal = custo * 1.2;
let lucro = (venda - cTotal) * quantidade;


if (custo >= 0 && venda >= 0) {
    console.log(`O lucro será de ${lucro} reais!`);
}
else {
    console.log("[ERRO]Valor inválido!")
}
*/

/*
ex11. 





