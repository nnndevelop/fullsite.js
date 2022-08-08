window.addEventListener('DOMContentLoaded', function(){

    let ham = document.querySelector('.ham');
    let mark = document.querySelector('.mark');
    let listUl = document.querySelectorAll('ul')
  

//     function hamToggle(){
//     listUl[0].classList.toggle('hidden')
   
    
// }
// function markToggle(){
//     listUl[0].style.display = 'none'
// }
function hamToggle(){
   listUl[0].style.display ='block'
    ham.style.display ='none'
    mark.style.display = 'block'
}
function markToggle(){
    listUl[0].style.display ='none'
    ham.style.display ='block'
    mark.style.display = 'none'
}

ham.addEventListener('click',hamToggle)
mark.addEventListener('click',markToggle) 




const numbPersone = document.querySelector('#number')
const mailPersone = document.querySelector('#mail')
const messegePersone = document.querySelector('#messege')
const btn = document.querySelector('#submit')

function locaData(event){
    event.preventDefault()
    const formPesrone = {
        number: numbPersone.value,
        mail: mailPersone.value,
        message: messegePersone.value
        
    }
    localStorage.setItem('formPersone', JSON.stringify(formPesrone))
    numbPersone.value = ''
    mailPersone.value = ''
    messegePersone.value = ''
}
btn.addEventListener('click',locaData);



})