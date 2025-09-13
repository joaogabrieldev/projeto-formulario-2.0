document.addEventListener("DOMContentLoaded", () => {
  const inputEMAILLogin = document.getElementById("input-email");
  inputEMAILLogin.addEventListener("input", (event) => {
    verificarEMAILLogin(event.target);
  });
  function verificarEMAILLogin(input) {
    let valorUserLogin = input.value.trim();

    function removeEmailExtensionLogin(textoOriginal, extensionsArray) {
      const padrao = extensionsArray.join("|");
      const regex = new RegExp(padrao, "gi");
      const resultado = textoOriginal.replace(regex, "");
      return resultado;
    }

    const emailExtensionsLogin = [
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

    const emailFormatadoLogin = removeEmailExtensionLogin(
      valorUserLogin,
      emailExtensionsLogin
    );

    input.value = emailFormatadoLogin;
  }

  const iconeOlhoPassLogin = document.getElementById("icone-olho-pass");

  const caminhoEyeLogin = "src/assets/icons/eye.svg";
  const caminhoEyeOffLogin = "src/assets/icons/eye-off.svg";

  const passwordLogin = document.getElementById("input-pass");

  iconeOlhoPassLogin.addEventListener("click", () => {
    const isEyeOpenLogin = iconeOlhoPassLogin.src.includes("eye.svg");
    const typePassLogin =
      passwordLogin.type === "password" ? "text" : "password";
    passwordLogin.type = typePassLogin;
    if (isEyeOpenLogin) {
      iconeOlhoPassLogin.src = caminhoEyeOffLogin;
    } else {
      iconeOlhoPassLogin.src = caminhoEyeLogin;
    }
  });

  const submitLogin = document.getElementById("input-submit");

  submitLogin.addEventListener("click", () => {
    if (inputEMAILLogin.value == "") {
      window.alert("Campo EMAIL vazio");
    } else if (passwordLogin.value == "") {
      window.alert("Campo SENHA vazio!");
    }
  });
});
