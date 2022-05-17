
function display(a) {
  document.getElementById("result").value += a;
}

function solve() {
  a = eval(document.getElementById("result").value);
  document.getElementById("result").value = a;
}

function clearScreen (){
  document.getElementById("result").value = "";
}
