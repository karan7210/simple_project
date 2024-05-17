var typed = new Typed(".auto-typing", {
    strings: ["Karan Kumar", "Software Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})


//////////////////////// form login page or sign page overlap js /////////////////////////


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const signLink = document.querySelector('.sign-link');
const btn_login = document.querySelector('.btn_login');
const cancel_icon = document.querySelector('.cancel_icon');

signLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btn_login.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});


cancel_icon.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');


});


/////////////////////// form login page or sign page overlap js ended /////////////////////////

document.getElementById('formBox').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value; 
    const rememberMe = document.getElementById('rememberMe').checked;
    

    if (email === 'karan@gmail.com' && password === 'password' && rememberMe ) {
     
      alert('Login Successful');
    } else {
     
      alert('Invalid username or password');
    }
  });







  //////////////count number//////////////////////////////////////


  var counter =1;
setInterval(function() {
  document.getElementById('radio' +counter).checked=true;
  counter++;
  if (counter>4) {
    counter =1;
  }
},2000)


let valueDisplays=document.querySelectorAll(".num")

let interval = 20000;

valueDisplays.forEach((valueDisplays)=>{
  let startValue= 0;

  let endValue = parseInt(valueDisplays.getAttribute("data-val"));
  
  let duration =Math.floor(interval /endValue);
  let counter = setInterval(function () {
    startValue+=1;
    valueDisplays.textContent=startValue;
    if (startValue==endValue) {
      clearInterval(counter)
    }
  }, duration )
})











// ///////////////////// form js script start ///////////////////////////////////////

document.getElementById('signRegister').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('signUsername').value;
  const emails = document.getElementById('signEmail').value;
  const passwords = document.getElementById('signPassword').value;
  const confirmPassword = document.getElementById('signConfirmPassword').value;
  const agree = document.getElementById('checking').checked;

  if (username && emails && passwords && confirmPassword && agree) {
    
    if (passwords === confirmPassword) {
     
      alert('Registration Successful');
      
      document.getElementById('formBox').reset();
    } else {
      
      alert('Passwords do not match');
    }
  } else {
    
    alert('Please fill in all fields');
  }
});


// sign toggle////////////////////////////////////////////


 

