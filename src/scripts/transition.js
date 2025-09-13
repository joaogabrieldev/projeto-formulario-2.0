document.addEventListener("DOMContentLoaded", () => {
  let isAnimating = false;
  let isPlayerA = true; // ou conforme seu estado inicial

  const playerA = document.getElementById("player-a");
  const playerB = document.getElementById("player-b");
  const urlCorAzul =
    "https://lottie.host/ec6eafd1-61e7-4443-8998-b400a7a32dac/ZysYqzGxHh.json";
  const urlCorBranca =
    "https://lottie.host/214226e9-1adf-4078-a7f1-087d3d7daaf7/AR5ni4UX8P.json";
  const hiddenBlockDiv = document.getElementById("div-hidden-block");

  const containerMaster = document.getElementById("container-master");
  const ladoAsombra = document.getElementById("container-login");
  const ladoBsombra = document.getElementById("container-sign-up");

  const body = document.getElementById("body-app");

  playerA.load(urlCorBranca);
  playerA.style.opacity = 1;
  playerB.style.opacity = 0;

  const hiddenBlock = document.getElementById("hidden-block");

  function trocarCor(urlProxima, isPlayerAAtual) {
    if (isAnimating) return;
    isAnimating = true;

    const playerAtivo = isPlayerAAtual ? playerA : playerB;
    const playerInativo = isPlayerAAtual ? playerB : playerA;

    const lottieInstance = playerAtivo.getLottie();
    if (!lottieInstance) {
      isAnimating = false;
      return;
    }

    const currentFrame = lottieInstance.currentFrame;

    playerInativo.addEventListener(
      "ready",
      () => {
        playerInativo.seek(currentFrame);
        playerInativo.play();

        playerAtivo.style.opacity = 0;
        playerInativo.style.opacity = 1;

        setTimeout(() => {
          playerAtivo.pause();
          isAnimating = false;
        }, 200);
      },
      { once: true }
    );

    playerInativo.load(urlProxima);

    isPlayerA = !isPlayerAAtual;
  }

  hiddenBlock.classList.add("state-login");

  // Link na Página Login
  document.getElementById("link-sign-in").addEventListener("click", () => {
    hiddenBlockDiv.style.transform = "translateX(231.6px)";
    hiddenBlock.style.backgroundColor = "#f8f8ff";
    hiddenBlock.style.border = "1px solid #f8f8ff";

    // Right Radius
    hiddenBlock.style.borderTopRightRadius = "0px";
    hiddenBlock.style.borderBottomRightRadius = "0px";

    // Left Radius
    hiddenBlock.style.borderTopLeftRadius = "20px";
    hiddenBlock.style.borderBottomLeftRadius = "20px";

    trocarCor(urlCorAzul, isPlayerA);

    body.classList.toggle("state-cadastro");
    containerMaster.style.filter = "drop-shadow(0px 0px 85px #3d6aff)";
  });

  // Link na Página Cadastro
  document.getElementById("link-sign-up").addEventListener("click", () => {
    hiddenBlockDiv.style.transform = "translateX(697.6px)";
    hiddenBlock.style.backgroundColor = "#3d6aff";
    hiddenBlock.style.border = "1px solid #3d6aff";

    // Right Radius
    hiddenBlock.style.borderTopRightRadius = "20px";
    hiddenBlock.style.borderBottomRightRadius = "20px";

    // Left Radius
    hiddenBlock.style.borderTopLeftRadius = "0px";
    hiddenBlock.style.borderBottomLeftRadius = "0px";

    trocarCor(urlCorBranca, isPlayerA);

    body.classList.toggle("state-cadastro");

    containerMaster.style.filter = "drop-shadow(0px 0px 85px #ffffffbf)";
  });
});
