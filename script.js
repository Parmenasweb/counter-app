// selecting the text content of the number being displayed

let number = document.querySelector('.number');
// number.textContent=0;

// adding a click event for the decrease button
document.querySelector('.decrease').addEventListener('click', ()=> {
   if (number.textContent==0){
       number.textContent=0;
       number.style.color= 'azure';
   } else {
    number.textContent--
    number.style.color= '#eb2626';
   }
})
// click event for the reset button
document.querySelector('.reset').addEventListener('click', ()=>{
    number.textContent = 0;
    number.style.color= 'azure';


})
// click event for the increase button
document.querySelector('.increase').addEventListener('click', ()=>{ 
    number.textContent++;
    number.style.color= '#1c6909';
})
