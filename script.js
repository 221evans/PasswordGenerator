const characters = ["A","B","C","D","E","F","G","H","I","J","K","L"
,"M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
 "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
 "=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


 let passwordEl1 = document.getElementById("password-el1")
 let passwordEl2 = document.getElementById("password-el2")
 let passwordLength = 15
 let isPressed = false
 function randomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length)
  return characters[randomChar] 
 }

 function newPassword() {
  if (isPressed === false) {
    generatePassword()
  }
 }

 function generatePassword() {
  isPressed = true
  let randomPassword = ""
  for (i = 0; i < passwordLength; i++) {
    randomPassword += randomCharacter()
  }
  passwordEl1.textContent += randomPassword
  passwordEl2.textContent += randomPassword
    return randomPassword
    
 }

// passwordEl not working?
