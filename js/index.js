var uneVariableLambda;
/**
 * fonction d'initialisation
 * @returns(undefined) aucun retour
 */
function init() {
  document
    .querySelector("#theme-switch")
    .addEventListener("change", function (evt) {
      changeTheme(evt.target.checked);
    });
  var currentDate = new Date();
  console.log(currentDate.toISOString());
  var footer = document.getElementsByTagName("footer")[0];
  footer.innerHTML = currentDate.toISOString();
  footer.style.backgroundColor = "rgba(50,50,50,0.3)";
  footer.style.color = "white";
  footer.style.fontStyle = "italic";
  footer.style.textDecoration = "Underline";
  footer.style.fontWeight = "900";
}

/**
 * changement d'état du theme
 * @param {boolean} isDark etat du choix de theme dark/white
 */
function changeTheme(isDark) {
  var nav = document.getElementsByTagName("nav")[0];
  var slider = document.getElementById("theme-switch");
  var lbl = document.querySelector("#theme label");
  if (isDark) {
    document.body.className = "dark";
    nav.classList.replace("navbar-light", "navbar-dark");
    nav.classList.replace("bg-light", "bg-dark");
    slider.checked = true;
    lbl.innerHTML = "Dark";
  } else {
    document.body.className = "";
    nav.classList.replace("navbar-dark", "navbar-light");
    nav.classList.replace("bg-dark", "bg-light");
    slider.checked = false;
    lbl.innerHTML = "White";
  }
}

document.addEventListener("DOMContentLoaded", function (evt) {
  console.log(evt);
  init();
});
