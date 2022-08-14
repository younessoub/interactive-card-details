const inputs = document.querySelectorAll('input');
inputs.forEach((i)=>{
  i.addEventListener('focus', ()=>{
    i.style.border = "2px solid var(--veryDarkViolet)";
  });
  i.addEventListener('focusout', ()=>{
    i.style.border = "1px solid var(--darkGrayishViolet)";
  });
});

const name = document.querySelector('#name');
const nameInput = document.querySelector('#cardHolderName');

nameInput.addEventListener('input', ()=>{
  handleInput(name, nameInput);
});

const cardNumber = document.querySelector('#card-number');
const cnInput = document.querySelector('#cn');

cnInput.addEventListener('input', ()=>{
  handleInput(cardNumber, cnInput);
}); 

const monthShow = document.querySelector('#monthShow');
const month = document.querySelector('#month');

month.addEventListener('input', ()=>{
  if(month.value.length<=month.getAttribute('maxlength')){
    handleInput(monthShow, month);
  }
}); 

const yearShow = document.querySelector('#yearShow');
const year = document.querySelector('#year');

year.addEventListener('input', ()=>{
  if(year.value.length<=year.getAttribute('maxlength')){
    handleInput(yearShow, year);
    
  }
}); 

const cvcShow = document.querySelector('#cvcShow');
const cvc = document.querySelector('#cvc');

cvc.addEventListener('input', ()=>{
  if(cvc.value.length<=cvc.getAttribute('maxlength')){
    handleInput(cvcShow, cvc);
  }
}); 

function handleInput(show, input){
  show.textContent = input.value;
}

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
const completed = document.querySelector('.completed');



let error = false;
function handleSubmit(e){
  e.preventDefault();
  if(nameInput.value===''){
    showError(nameInput, "Can't be blank");
    error = true;
  }else{
    removeError(nameInput);
  }
  if(cnInput.value===''){
    showError(cnInput, "Can't be blank");
    error = true;
  }else{
    removeError(cnInput);
  }
  if(month.value===''){
    showError(month, "Can't be blank");
    error = true;
  }else{
    removeError(month);
  }
  if(year.value===''){
    showError(year, "Can't be blank");
    error = true;
  }else{
    removeError(year);
  }
  if(cvc.value===''){
    showError(cvc, "Can't be blank");
    error = true;
  }else{
    removeError(cvc);
  }

  if(!error){
    form.style.display = "none"; 
    completed.style.display = "block";
  }

}

function showError(element, message){
  let error = element.parentElement.querySelector('p');
  element.style.border = "1px solid var(--red)"
  error.textContent = message;
  error.style.display = "block";
}

function removeError(element){
  let error = element.parentElement.querySelector('p');
  error.style.display = "none";
}

function containsLetter(str) {
  return /[a-zA-Z]/.test(str);
}