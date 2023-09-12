import { registerRequest } from './requests.js';

const handleRegister = () => {
  const inputs = document.querySelectorAll(".register__input");
  const button = document.querySelector("#register__submit");

  button.addEventListener("click", async (event) => {
    event.preventDefault();

    let count = 0;

    const requestBody = {};

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        count++;
      } else {
        requestBody[input.name] = input.value.trim();
      }
    });

    if (count === 0) {
      const response = await registerRequest(requestBody);
      
    } else {
      toast("Por favor, preencha todos os campos!", red);
    }
  });
};

const handleButton = () => {    
    const button = document.querySelector(".redirect__button")

    button.addEventListener('click', () => {
        location.replace("index.html")
    })
}

handleButton()
handleRegister()
