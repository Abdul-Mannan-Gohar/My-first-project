const container=document.querySelector(".container");
const rigisterbtn=document.querySelector(".register-btn");
const loginbtn=document.querySelector(".login-btn");
 
rigisterbtn.addEventListener('click', ()=>{
    container.classList.add('active');
})
loginbtn.addEventListener('click',()=>{
    container.classList.remove('active');
})