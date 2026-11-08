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

  // Botón de compartir (Web Share API)
  const btnShare = document.getElementById("btn-share");
  if (btnShare && navigator.share) {
    btnShare.addEventListener("click", () => {
      navigator.share({
        title: "estimprog | Web Personal",
        text: "Portafolio y directorio de aplicaciones del desarrollador estimprog",
        url: "https://estimprog-del.github.io/web-personal/"
      }).catch(() => {});
    });
  } else if (btnShare) {
    btnShare.style.display = "none";
  }
});
