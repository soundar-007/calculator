const inputValue = document.querySelector("input");

var em = "";
function display(n) {
  em = em + n;

  inputValue.value = em;
}

function equal() {
  if (em !== "") {
    inputValue.value = eval(em);
    em = "";
  } else {
    inputValue.value = em;
  }
}
function clea(m) {
  em = "";
  inputValue.value = em;
}
