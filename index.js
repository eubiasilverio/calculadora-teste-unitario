function soma(a, b) {
    return a + b;
}

module.exports = soma;

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function maiorDeIdade(idade) {
    if (idade => 18){
        return 'Você é maior';
    } else {
            return 'Você é de menor';
        }
    }
  
    console.log(soma(2, 2));
    console.log(subtrair(5, 10));
    console.log(multiplicar(2, 2));
    console.log(dividir(10, 2));
    console.log(maiorDeIdade(21));

    module.exports =  {
        soma, subtrair, dividir, multiplicar, maiorDeIdade
    }
