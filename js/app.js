
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calc = document.getElementById('display-number');
    if(isNaN(number)){
        if(number == 'C'){
            calc.value = '';
        }
    }
    else{
        
        const previousCalc = calc.value;
        const newCalc = previousCalc + number;
        calc.value = newCalc;
    }
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const displayNum = document.getElementById('display-number').value;
    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');
    if(pin == displayNum){
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else{
        
        failMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}

