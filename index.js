const readline = require('readline');
const input = readline.createInterface(process.stdin);

const randomNumber = Math.floor(Math.random() * 100);
console.log(`Загадано число в диапазоне от ${0} до ${100}`);


const game = (data) => {
  if (data > randomNumber) {
    console.log(`Меньше`);
  } else if (data < randomNumber) {
    console.log(`Больше`);
  } else {
    console.log(`Отгадано число ${randomNumber}`);
    process.exit();
  }
}

input.on('line', (data) => game(data));