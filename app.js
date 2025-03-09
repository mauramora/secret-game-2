let secretNumber = 0;
let attemptNumber = 0;
let listSortedNumbers = [];
let maxNumber = 10

const para = document.querySelector('p');
para.innerHTML = `Tell me a number from 1 to ${maxNumber}`;

function assignElementText(element, text){
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function verifyAttempt() {
    let userNumber = parseInt(document.getElementById('userWorth').value);

    console.log(attemptNumber);
    console.log(secretNumber);
    if (userNumber === secretNumber){
        assignElementText('p', `You got ts(this shit) right in ${attemptNumber} ${(attemptNumber === 1) ? 'attempt': 'attempts'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (userNumber > secretNumber) {
            assignElementText('p', 'the number is lower')
        } else {
            assignElementText('p', 'its higher cuh')
        }
        attemptNumber++; 
        clearBox();
    }
    return;
} 

function clearBox(){
    document.querySelector('#userWorth').value = '';
};

function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random()*maxNumber)+1;
    
    console.log(generatedNumber);
    console.log(listSortedNumbers);

    if (listSortedNumbers.length == maxNumber) {
        assignElementText('p', 'All possible numbers have been used')
    } else {

        if (listSortedNumbers.includes(generatedNumber)) {
            return generateSecretNumber();
        } else {
            listSortedNumbers.push(generatedNumber);
            return generatedNumber;
        }
    }    
} 

function initialConditions(){
    assignElementText('h1', 'Secret Number Game!!');
    assignElementText('p', `Gimme a number 1-${maxNumber}`);
    secretNumber = generateSecretNumber();
    attemptNumber = 1;
}

function restartGame() {
    clearBox();
    initialConditions();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); 
}

initialConditions();