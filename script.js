let button = document.querySelector('button');
let input = document.getElementById('input');
let result = document.getElementById('result');
let tax = 13;

function counting(){
    if (input.value == 0) {
        alert('Введите данные');
    } //  else if (){

    // } 
    else {
        let real = Math.floor((input.value / 100) * tax);
        result.innerHTML = `Ваш подоходный налог = ${real} рублей`;
    }
    
};


