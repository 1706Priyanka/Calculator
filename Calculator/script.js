let string = "";
let a = document.querySelectorAll(".btns");
a.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == Infinity) {
      string = "undefined";
      document.querySelector("input").value = string;
    } else {
      string += e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
