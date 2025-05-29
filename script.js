document.addEventListener("DOMContentLoaded", () => {
    // Botões "SAIBA MAIS"
    const saibaMaisButtons = document.querySelectorAll(".btn-info");
    saibaMaisButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Em breve mais informações sobre este curso!");
      });
    });
  
    // Botões "INSCREVER"
    const inscreverButtons = document.querySelectorAll(".btn-inscrever");
    inscreverButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Cancelar.");
      });
    });
  });
  