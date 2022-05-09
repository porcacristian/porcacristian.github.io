const buttonSubmit = document.querySelector('#button');
const contactForm = document.querySelector('.contact-form p.block')
const email = document.querySelector('#email'),
    names =document.querySelector('#name'),
    affair = document.querySelector('#asunto'),
    phone = document.querySelector('#telefono'),
    message = document.querySelector('#message');


const er = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;




eventListeners()
function eventListeners(){
    document.addEventListener('DOMContentLoaded', startApp)

    email.addEventListener('blur',validateForm);
    names.addEventListener('blur',validateForm)
    affair.addEventListener('blur',validateForm)
    phone.addEventListener('blur',validateForm)
    message.addEventListener('blur',validateForm)
}


function startApp(){
    buttonSubmit.classList.add('disabled');
}


function validateForm(e){
    if(e.target.value.length > 0){
        
    }else{
        e.target.classList.add('border', 'border-danger')
        showError('Todos los campos son obligatorios')
    }
    if(e.target.type === 'email'){
        if(er.test(e.target.value)){
            console.log('email valido')
        }else{
            e.target.classList.add('border', 'border-danger')
            showError('El email no es valido')
        }
    }



}

function showError(message){
    const errorMessage = document.createElement('p')
    errorMessage.textContent = message;
    errorMessage.classList.add('d-block','text-danger', 'text-center', 'text-uppercase', 'fs-3','border', 'border-danger', 'error');
    
    const errors = document.querySelectorAll('.error')
    if(errors.length === 0){
        contactForm.appendChild(errorMessage)
    }
    
    
}