document.addEventListener("DOMContentLoaded", () => {

  const inputTELUp = document.getElementById("input-numero-up");

  inputTELUp.addEventListener("input", (event) => {
    formatarTELUp(event.target);
  });
  function formatarTELUp(input) {
    let valorLimpoUp = input.value.replace(/\D/g, "");

    if (valorLimpoUp.length > 11) {
      valorLimpoUp = valorLimpoUp.slice(0, 11);
    }

    let valorFormatadoUp = valorLimpoUp;

    if (valorLimpoUp.length > 3) {
      valorFormatadoUp = valorLimpoUp.replace(/(\d{2})(\d)/, "($1) $2");
    }

    if (valorLimpoUp.length > 8) {
      valorFormatadoUp = valorLimpoUp.replace(
        /(\d{2})(\d{5})(\d{4})/,
        "($1) $2-$3"
      );
    }

    input.value = valorFormatadoUp;
  }

  const inputEMAILUp = document.getElementById("input-email-up");
  inputEMAILUp.addEventListener("input", (event) => {
    verificarEMAILUp(event.target);
  });
  function verificarEMAILUp(input) {
    let valorUserUp = input.value.trim();

    function removeEmailExtensionUp(textoOriginal, extensionsArray) {
      const padrao = extensionsArray.join("|");
      const regex = new RegExp(padrao, "gi");
      const resultado = textoOriginal.replace(regex, "");
      return resultado;
    }

    const emailExtensionsUp = [
      "gmail\\.com",
      "gmail",
      "hotmail\\.com",
      "hotmail",
      "yahoo\\.com",
      "yahoo",
      "outlook\\.com",
      "outlook",
      "@",
      ".com",
      ".br",
    ];

    const emailFormatadoUp = removeEmailExtensionUp(
      valorUserUp,
      emailExtensionsUp
    );

    input.value = emailFormatadoUp;
  }

  const iconeOlhoPassUp = document.getElementById("icone-olho-pass-up");
  const iconeOlhoConfirmPassUp = document.getElementById(
    "icone-olho-confirm-pass-up"
  );

  const caminhoEyeUp = "src/assets/icons/eye.svg";
  const caminhoEyeOffUp = "src/assets/icons/eye-off.svg";

  const passwordUp = document.getElementById("input-pass-up");
  const confirmPassUp = document.getElementById("input-confirm-pass-up");

  iconeOlhoPassUp.addEventListener("click", () => {
    const isEyeOpenUp = iconeOlhoPassUp.src.includes("eye.svg");
    passwordUp.type = passwordUp.type === "password" ? "text" : "password";
    iconeOlhoPassUp.src = isEyeOpenUp ? caminhoEyeOffUp : caminhoEyeUp;
  });

  iconeOlhoConfirmPassUp.addEventListener("click", () => {
    const isEyeOpenConfirmUp = iconeOlhoConfirmPassUp.src.includes("eye.svg");
    confirmPassUp.type = confirmPassUp.type === "password" ? "text" : "password";
    iconeOlhoConfirmPassUp.src = isEyeOpenConfirmUp ? caminhoEyeOffUp : caminhoEyeUp;
  });
});