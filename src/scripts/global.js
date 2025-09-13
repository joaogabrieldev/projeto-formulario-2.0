document.addEventListener("DOMContentLoaded", () => {
  const submitUp = document.getElementById("input-submit-up");

  submitUp.addEventListener("click", () => {
    if (inputEMAILUp.value == "") {
      window.alert("Campo EMAIL vazio");
    } else if (passwordUp.value == "") {
      window.alert("Campo SENHA vazio!");
    } else if (confirmPassUp.value == "") {
      window.alert("Campo CONFIRMAR SENHA vazio!");
    } else if (inputTELUp.value == "") {
      window.alert("Campo TELEFONE vazio!");
    } else if (
      !(passwordUp.value == confirmPassUp.value) ||
      passwordUp.value.length != confirmPassUp.value.length
    ) {
      window.alert("Senha Diferentes! As senhas precisam ser iguais");
    }
  });
});
