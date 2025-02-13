function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".menu-icon");
  const navContainer = document.querySelector(".nav-container");

  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("active");
  navContainer.classList.toggle("active");
}
