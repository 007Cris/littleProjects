var value, cpf, firstVerifyer, secondVerifyer, firstDigit, secondDigit, i;

function verify() {
    value = document.validator.inputCPF.value;
    cpf = value.split('');
    firstVerifyer = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    secondVerifyer = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    firstDigit = 0;
    secondDigit = 0;
    
    // Verificacao do primeiro digito
    for(let i = 0; i <= 8; i++) {
        firstDigit += cpf[i] * firstVerifyer[i];
    }
    firstDigit = (firstDigit * 10) % 11;

    // Verificacao do segundo digito
    for(i = 0; i <= 9; i++) {
        secondDigit += cpf[i] * secondVerifyer[i];
    }
    secondDigit = (secondDigit * 10) % 11;

    if(firstDigit == cpf[9] && secondDigit == cpf[10]) {
        alert("Este CPF é válido")
    }
    else if(value === "") {
        alert("Campo vazio");
    }
    else {
        alert("Este CPF é inválido");
    }
}

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
