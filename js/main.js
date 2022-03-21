const inputs = document.querySelectorAll('input')
const errorMsg = document.querySelectorAll('.error-msg')

var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

inputs.forEach(input => {
    input.onblur = function () {
        if(input.value == ''){
            input.classList.add('red-border')
            input.parentElement.querySelector('.error-msg').classList.remove('hide')
        }
        
    }
    input.onfocus = function () {
        input.classList.remove('red-border')
        input.parentElement.querySelector('.error-msg').classList.add('hide')
    }
})

inputs[2].onblur = function () {
    if(!inputs[2].value.match(regex)){
        inputs[2].classList.add('red-border','red-text')
        inputs[2].parentElement.querySelector('.error-msg').classList.remove('hide')
    }     
}

inputs[2].onfocus = function () {
    if(!inputs[2].value.match(regex)){
        inputs[2].classList.remove('red-border','red-text')
        inputs[2].parentElement.querySelector('.error-msg').classList.add('hide')
    }     
}
