let firstNumber = prompt("Digite o primeiro numero");
let secondNumber = prompt("Digite o segundo numero");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

function calcularOperacoes(firstNumber, secondNumber) {
  const sum = firstNumber + secondNumber;
  const sub = Math.abs(firstNumber - secondNumber);
  const multi = firstNumber * secondNumber;
  const div = firstNumber / secondNumber;
  const restDiv = firstNumber % secondNumber;
  
  const isSumEven = sum % 2 === 0;
  const parityMessage = isSumEven ? "par" : "ímpar";
  
  const areNumbersEqual = firstNumber === secondNumber;
  const equalityMessage = areNumbersEqual ? "iguais" : "diferentes";

  alert(`Soma: ${sum}`);
  alert(`Subtração: ${sub}`);
  alert(`Multiplicação: ${multi}`);
  alert(`Divisão: ${div}`);
  alert(`Resto da divisão: ${restDiv}`);
  alert(`A soma dos números é ${parityMessage}`);
  alert(`Os números são ${equalityMessage}`);
}

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  calcularOperacoes(firstNumber, secondNumber);
} else {
  alert("Por favor, insira números válidos.");
}
