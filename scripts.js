const form = document.getElementById('number-form');
let sucessMessage = document.querySelector('.success-message');
let errorMessage = document.querySelector('.error-message');

let formEValido =  false;
// Pegar os valores dos inputs
let numeroA = document.getElementById('numberA');
let numeroB = document.getElementById('numberB');

// Adicionar um EventListener ao formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // verficar se o número A é menor que o número B
    if (numeroA.value < numeroB.value) {
        formEValido = true;
    }else {
        formEValido = false;
    }
    //verificar se o formulário é válido
    if (formEValido) {
        console.log('Formulário válido');
        // exibir mensagem de sucesso
        sucessMessage.innerHTML = `<b>Formulário enviado</b>. Número A: <b>${numeroA.value}</b> é menor que o número B: <b>${numeroB.value}</b>`;
        document.querySelector('.success-message').style.display = 'block'
        // esconder a mensagem de sucesso após 5 segundos
        setTimeout(() => {
            document.querySelector('.success-message').style.display = 'none'
        }, 5000);
        // limpar os campos do formulário
        numeroA.value = '';
        numeroB.value = '';
    }else {
        console.log('Formulário inválido');
        // exibir mensagem de erro
        errorMessage.innerHTML = `<b>Formulário inválido</b>. Número A: <b>${numeroA.value}</b> precisa ser menor que o número B: <b>${numeroB.value}</b>`;
        document.querySelector('.error-message').style.display = 'block'
        // esconder a mensagem de erro após 10 segundos
        setTimeout(() => {
            document.querySelector('.error-message').style.display = 'none'
        }, 10000);
    }
})  // Fim do EventListener
