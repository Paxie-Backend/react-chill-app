const dropdowns = document.querySelectorAll(".footer-dropdown");
const userDropdownBtn = document.querySelector(".user-dropdown-button");
const userDropdown = document.querySelector(".dropdown");

dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector(".footer-dropdown-button");

  button.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });
});

userDropdownBtn.addEventListener("click", () => {
  userDropdown.classList.toggle("open");
});
