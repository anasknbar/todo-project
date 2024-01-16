'use strict';
let userName = prompt('Enter Your Name, please')
let userGender = prompt('Enter Your Gender.')
let userAge = prompt('Enter Your Age')

if (userAge <= 0){
  alert('your Age is not valid!')
}

let welcomeMessage = confirm('Do you wants to see the welcoming message.')
if (welcomeMessage){

  if(userGender === 'male'){
    alert(`welcome Mr: ${userName} to our website`)
  } else if(userGender === 'female'){
    alert(`welcome Ms: ${userName} to our website`)
  } else{
    alert(`welcome ${userName} to our website`)
  }
  
}





