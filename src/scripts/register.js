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
      // Aqui você pode adicionar qualquer lógica adicional após um registro bem-sucedido
    } else {
      toast("Por favor, preencha todos os campos!", red);
    }
  });
};

