ativarDropdown();


function ativarDropdown(){
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("mainNav");

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
};
