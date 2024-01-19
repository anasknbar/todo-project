'use strict';


welcomingMessage()


userPreferences()










function welcomingMessage() {
  let userName = prompt('Enter Your Name, please')
  let userGender = prompt('Enter Your Gender.')
  let userAge = prompt('Enter Your Age')
  if (userAge <= 0) {
    alert('your Age is not valid!')
  }

  let userPermison = confirm('Do you wants to see the welcoming message.')

  if (userPermison) {

    if (userGender === 'male') {
      alert(`welcome Mr: ${userName} to our website`)
    } else if (userGender === 'female') {
      alert(`welcome Ms: ${userName} to our website`)
    } else {
      alert(`welcome ${userName} to our website`)
    }

  }

}

function userPreferences() {
  let userPreferencesArray = []
  let question1 = prompt('Do you enjoy cooking at home? (Yes/No)')
  let question2 = prompt('Do you prefer tea over coffee? (Yes/No)')
  let question3 = prompt('Do you prefer vegetables over meat? (Yes/No)')

  userPreferencesArray.push(emptyInputVerification(question1), emptyInputVerification(question2), emptyInputVerification(question3))
  for(let answer of userPreferencesArray){
    console.log(answer)
  }

}

function emptyInputVerification(input){
  if(input){
    return input
  }else{
    return 'invalid'
  }
}








