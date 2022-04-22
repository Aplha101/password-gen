const btn = document.getElementById("btn")
const p = document.getElementById("pass")
function generateRandom(Array) {
  let random = Math.floor(Math.random() * Array.length)
  return Array[random]
}
let prev = []

function genPassword() {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^%@$#&*&^$&%&^#@5&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 12;
  let password = "";
  for (var i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  prev.push(password)
  p.textContent = password
}



function cpy(){
navigator.clipboard.writeText(prev[prev.length - 1])
}