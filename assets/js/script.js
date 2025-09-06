'use strict';

// Toggle sidebar
const elementToggleFunc = elem => elem.classList.toggle("active");
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if(sidebarBtn) sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// Page navigation (SPA behavior)
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll(".page");

navigationLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetPage = this.getAttribute("href").substring(1); // remove #
    pages.forEach(page => {
      page.classList.toggle("active", page.dataset.page === targetPage);
    });
    navigationLinks.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");
    window.scrollTo(0,0);
  });
});
