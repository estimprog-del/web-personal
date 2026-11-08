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
});
