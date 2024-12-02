document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector(".close-btn");
  
    // Toggle sidebar visibility
    burger.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
    });
  
    // Close sidebar when close button is clicked
    closeBtn.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
  