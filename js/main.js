const buttonSubmit = document.querySelector('#button');
const contactForm = document.querySelector('.contact-form p.block');
const form = document.querySelector('form')
const email = document.querySelector('#email'),
    names =document.querySelector('#name'),
    affair = document.querySelector('#asunto'),
    phone = document.querySelector('#telefono'),
    message = document.querySelector('#message');

const er = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
const erPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

eventListeners()
function eventListeners(){
    document.addEventListener('DOMContentLoaded', startApp)
    email.addEventListener('blur',validateForm);
    names.addEventListener('blur',validateForm);
    affair.addEventListener('blur',validateForm);
    phone.addEventListener('blur',validateForm);
    message.addEventListener('blur',validateForm);
    form.addEventListener('submit', sendEmail)
}

function startApp(){
    buttonSubmit.classList.add('disabled');
}

function validateForm(e){
    const error = document.querySelector('p.error');
    if(error){
        error.remove();
    }

    if(e.target.value.length > 0){
        e.target.classList.remove('border', 'border-danger')
        e.target.classList.add('border', 'border-success', 'border-3')
    }else{
        e.target.classList.remove('border', 'border-success', 'border-3')
        e.target.classList.add('border', 'border-danger')
        showError('Todos los campos son obligatorios')
    }
    if(e.target.type === 'email'){
        if(er.test(e.target.value)){
            const error = document.querySelector('p.error');
        if(error){
            error.remove();
            }
            e.target.classList.remove('border', 'border-danger')
            e.target.classList.add('border', 'border-success', 'border-3', 'my-2')
            }else{
            e.target.classList.add('border', 'border-danger')
            showError('El email no es valido')            
        }
    }
    if(e.target.type === 'tel'){
        if(erPhone.test(e.target.value)){
            const error = document.querySelector('p.error');
        if(error){
            error.remove();
            }
            e.target.classList.remove('border', 'border-danger')
            e.target.classList.add('border', 'border-success', 'border-3', 'my-2')
            }else{
            e.target.classList.add('border', 'border-danger')
            showError('El número de teléfono no es valido')            
        }
    }

    if(er.test(email.value) && names.value !== '' && affair.value !== '' && erPhone.test(phone.value) && message.value !== ''){
        buttonSubmit.classList.remove('disabled');       
    }

}



function sendEmail(e){
    e.preventDefault();
    
    const spinner = document.querySelector('#spinner')
    spinner.style.display = 'flex';

    setTimeout(()=>{
        spinner.style.display = 'none';

        const successfulMessage = document.createElement('p')
        successfulMessage.textContent = "Mensaje enviado exitosamente"
        successfulMessage.classList.add('text-center', 'text-white','fs-3', 'bg-success', 'my-2')
        contactForm.appendChild(successfulMessage);

        setTimeout(()=>{
            successfulMessage.remove();
            form.reset(); 
            deleteBorders();           
            startApp();
        },3000)
    },2000)
}


function deleteBorders() {
    const elements = [email,names,phone,affair,message];
    elements.forEach((el)=>{
        el.classList.remove('border', 'border-success', 'border-3');
    })  
};














function showError(messageError){
    const errorMessage = document.createElement('p')
    errorMessage.textContent = messageError;
    errorMessage.classList.add('d-block','text-danger', 'text-center', 'text-uppercase', 'fs-3','border', 'border-danger', 'error');
    
    const errors = document.querySelectorAll('.error')
    if(errors.length === 0){
        contactForm.appendChild(errorMessage)
    }    
}