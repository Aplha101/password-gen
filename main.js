const btn = document.getElementById("btn")
const p = document.getElementById("pass")
const cpy = document.getElementById("cpy")
function generateRandom(Array) {
  let random = Math.floor(Math.random() * Array.length)
  return Array[random]
}

function genPassword() {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^%@$#&*&^$&%&^#@5&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 12;
  let password = "";
  for (var i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  p.textContent = password
}
