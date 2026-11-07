/* ========================================
   Web Personal - estimprog-del
   JavaScript vanilla
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Actualizar el año del footer dinámicamente
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Opcional: animación suave al hacer clic en enlaces externos
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Se podría enviar un evento de analítica aquí en el futuro
      console.log("Abriendo enlace externo:", link.href);
    });
  });
});
