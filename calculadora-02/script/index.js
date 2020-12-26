var value, firstInput, secInput, numberInput, secNumberInput, finalResult, operation;

// Escreve os valores no visor da calculadora
function numbersInScreen(pressBtn) {
    value = document.calc.visor.value += pressBtn;

    // Acao tomada caso o valor do visor ultrapasse o permitido
    if(value.length > 14) {
        document.calc.visor.value = " ";
    }
}

function operatorsInScreen(pressOp) {
    // Limpa o visor; 
    // Armazena o primeiro valor e a operacao
    firstInput = document.calc.visor.value;
    numberInput = Number(firstInput);

    document.calc.visor.value = " ";

    operation = pressOp;
}

function clearScreen() {
    document.calc.visor.value = " ";
    numberInput = 0;
    secNumberInput = 0;
    finalResult = " ";
    operation = " ";
}

function backspace() {
    // Limpa a tela de uma vez quando ocorre um erro 
    // so funciona se estiver antes das variaveis
    if(document.calc.visor.value == "syntax error") {
        clearScreen();
    }

    // Limpa somente um digito
    let i = document.calc.visor.value.length;
    let tempScreen = document.calc.visor.value;        
    let temp = [];

    for(let j = 0; j < i; j++) {
        temp[j] = tempScreen[j];
    }
    
    temp.pop()
    temp.concat()
    temp = temp.join('')
    console.log(temp)
    document.calc.visor.value = temp;

}

function calculate() {
    // Armazena o segundo valor;
    // pois captura valor vazio se colocado na funcao operatorsInScreen;
    secInput = document.calc.visor.value;
    secNumberInput = Number(secInput);

    if(operation === '+') {
        finalResult =  numberInput + secNumberInput;
        document.calc.visor.value = finalResult;
        numberInput = 0;
    }
    
    if(operation === '-') {
        finalResult = numberInput - secNumberInput;
        document.calc.visor.value = finalResult;
        numberInput = 0;
    }

    if(operation === '*') {
        finalResult = numberInput * secNumberInput;
        document.calc.visor.value = finalResult;
        numberInput = 0;
    }

    if(operation === '/') {
        finalResult = numberInput / secNumberInput;
        document.calc.visor.value = finalResult;
        numberInput = 0;
    }

    if(document.calc.visor.value == "NaN") {
        document.calc.visor.value = "syntax error"
    }

    if(document.calc.visor.value == Infinity || document.calc.visor.value == -Infinity) {
        document.calc.visor.value = "syntax error"
    }
}

// nao entendo nada dessa funcao ainda so sei que tem que estudar regEx
function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
}
