const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

themeSwitch.addEventListener("change", function () {
  body.classList.toggle("dark-theme");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-theme") ? "dark" : "light"
  );
});

// Check if a theme preference is stored
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
}
