// Når DOM'en er klar
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown-btn");

    // Åbn/luk dropdown ved klik
    button.addEventListener("click", (e) => {
      e.stopPropagation(); // forhindre klik i at lukke straks
      dropdown.classList.toggle("open");
    });
  });

  // Luk alle dropdowns, hvis man klikker udenfor
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.open").forEach((openDrop) => {
      openDrop.classList.remove("open");
    });
  });
});
