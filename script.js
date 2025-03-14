document.addEventListener("DOMContentLoaded", () => {
    let menu = document.querySelector("#menu-btn");
    let navbar = document.querySelector(".header .navbar");

    if (menu && navbar) {
        menu.onclick = () => {
            menu.classList.toggle("fa-times");
            navbar.classList.toggle("active");
        };

        window.onscroll = () => {
            console.log("Scrolling detected!"); 
            menu.classList.remove("fa-times");
            navbar.classList.remove("active");
        };
    } else {
        console.error("Menu button or navbar not found!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact form").addEventListener("submit", function (event) {
        event.preventDefault(); 

        alert("Your appointment is booked!"); 
        
        window.location.href = "#home"; 
    });
});

  
  

  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); 

        let contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



var swiper = new Swiper(".team-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});