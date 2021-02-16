const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
let validEmail = false;
let validnumber = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
        
    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

number.addEventListener('blur', ()=>{
    console.log("number is blurred");
    let regex = /^([0-9]){10}$/;
    let str = number.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your number is valid');
        number.classList.remove('is-invalid');
        validnumber = true;
    }
    else{
        console.log('Your number is not valid');
        number.classList.add('is-invalid');
        validnumber = false;
        
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validnumber);
    
    if(validEmail && validUser && validnumber){
        let failure = document.getElementById('failure');

        console.log('number, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of number, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
        }

    
    
})
