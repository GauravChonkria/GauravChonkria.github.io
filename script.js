var prevScrollPos = window.scrollY;
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
  var currentScrollPos = window.scrollY;
  
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar.classList.remove("hidden");
  } else {
    // Scrolling down
    navbar.classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
});

const ham_menu = document.querySelector('.hamburger');
const ham_menu_i = document.querySelector('.hamburger i');
const mobile_menu = document.querySelector('.mobile-nav');
const mobile_menu_links = document.querySelectorAll('.mobile-nav a');

ham_menu.addEventListener('click', () => {
    mobile_menu.classList.toggle('is-active');

    if(ham_menu_i.classList.contains('fa-bars')) {
        ham_menu_i.classList.replace('fa-bars', 'fa-x');
    } else if (ham_menu_i.classList.contains('fa-x')) {
        ham_menu_i.classList.replace('fa-x', 'fa-bars');
    }
})

mobile_menu_links.forEach((mobile_menu_link) => {
    mobile_menu_link.addEventListener('click', () => {
        document.querySelector('.hamburger').click();
    })
})

