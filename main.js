const btnLightDarkModw = document.getElementsByClassName("light-dark-btn")[0];
const sahp = document.getElementsByClassName("sahp")[0];
const inputValue = document.getElementsByClassName("input-value")[0];
const operator = document.getElementsByClassName("operator")[0];
const btn = document.querySelectorAll(".btn-txt");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");

const calc = ["+", "-", "x", "/", "%"];
btnLightDarkModw.addEventListener("click", () => {
  if (btnLightDarkModw.classList.contains("dark-btn")) {
    btnLightDarkModw.innerHTML = "<span class='icon-brightness-up'></span>";
    btnLightDarkModw.style.left = "0%";
    document.body.classList.remove("dark-mode");
    btnLightDarkModw.classList.remove("dark-btn");
    sahp.textContent = "light mode";
  } else {
    btnLightDarkModw.innerHTML = "<span class='icon-moon'></span>";
    btnLightDarkModw.style.left = "85%";
    document.body.classList.add("dark-mode");
    btnLightDarkModw.classList.add("dark-btn");
    sahp.textContent = "dark mode";
  }
});

function font() {
  if (inputValue.textContent.length >= 17) {
    inputValue.style.fontSize = "20px";
  } else {
    inputValue.style.fontSize = "35px";
  }
}

btn.forEach((button) => {
  button.addEventListener("click", () => {
    inputValue.textContent += button.textContent;
    font();
  });
});

function clear() {
  operator.textContent = "";
  inputValue.textContent = "";
  font();
}
clearBtn.onclick = () => {
  clear();
};

function backspace() {
  let value = inputValue.textContent;
  inputValue.textContent = value.slice(0, -1);
  font();
}
backspaceBtn.onclick = () => {
  backspace();
};

function equal() {
  let inputText = inputValue.textContent;

 

  operator.textContent = inputText;

  if (inputText.includes("X") || inputText.includes("x")) {
    const valueFormat = inputText.replace(/x/gi, "*");
    let result = eval(valueFormat);
    inputValue.textContent = result;
  } else {
    let result = math.evaluate(inputText);
    inputValue.textContent = result;
  }
  font();
}


const x = document.querySelectorAll(".x");

x.forEach((button) => {
  button.addEventListener("click", () => {
    let value = inputValue.textContent;
    if (value === "") {
      return;
    }
    if (value.charAt(value.length - 1) === button.textContent) {
      inputValue.textContent = value.slice(0, value.length);
    } else {
      if (value && calc.includes(value[value.length - 1])) {
        inputValue.textContent =
          value.slice(0, value.length - 1) + button.textContent;
      } else {
        inputValue.textContent += button.textContent;
      }
    }

    font()
  });
});
