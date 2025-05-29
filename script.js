document.addEventListener("DOMContentLoaded", () => {
    const saibaMaisButtons = document.querySelectorAll(".btn-info");
    saibaMaisButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Em breve mais informações sobre este curso!");
      });
    });
    const inscreverButtons = document.querySelectorAll(".btn-inscrever");
    inscreverButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Cancelar.");
      });
    });
  });
  
