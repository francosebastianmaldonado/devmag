var listContainer = document.getElementsByClassName("list-container")

document.addEventListener("DOMContentLoaded", () => {
    inicio()
});

function inicio() {
  // Tabla dispositivos
  const tableRows = document.querySelectorAll(".table-devices tbody tr");
  for (const tableRow of tableRows) {
    tableRow.addEventListener("click", function () {
      window.location.href = this.dataset.href;
    });
  }

  // Boton menu abrir
  const btnMenu = document.querySelectorAll(".btn-menu")[0];
  btnMenu.addEventListener("click", () => {
    const nav = document.getElementsByTagName("nav")[0];

    if (nav.className == "hidden") {
      nav.className = "show";
    } else {
      nav.className = "hidden";
    }

  });

  // Boton menu cerrar
  const btnMenuClose = document.querySelectorAll(".btn-menu-close")[0];
  btnMenuClose.addEventListener("click", () => {
    const nav = document.getElementsByTagName("nav")[0];

    if (nav.className == "hidden") {
      nav.className = "show";
    } else {
      nav.className = "hidden";
    }

  });
}