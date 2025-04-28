const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content'); 

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active')); 
    button.classList.add('active'); 

    const targetId = button.id + 'Content'; 
    contents.forEach(content => {
      if (content.id === targetId) {
        content.style.display = 'block'; 
      } else {
        content.style.display = 'none'; 
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("header button.sm\\:hidden");
  const mobileMenu = document.getElementById("mobileMenuDropdown");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a"); // adjust selector as needed
  const path = window.location.pathname.toLowerCase();

  links.forEach((link) => {
    if (link.getAttribute("href").toLowerCase() === path) {
      link.classList.add("text-[#248ADE]");
    } else {
      link.classList.add("text-[#18181880]");
    }
  });
});

function toggleDropdown(dropdownId) {
 
  const dropdowns = document.querySelectorAll('.absolute');
 
 
  dropdowns.forEach(dropdown => {
    if (dropdown.id !== dropdownId) {
      dropdown.classList.add('hidden');
    }
  });

  
  const dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle('hidden');
}

window.onclick = function(event) {
  if (!event.target.matches('.cursor-pointer')) {
    const dropdowns = document.querySelectorAll('.absolute');
    dropdowns.forEach(dropdown => {
      dropdown.classList.add('hidden');
    });
  }
}