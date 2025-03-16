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
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        alert("Your appointment is booked!"); // Show confirmation alert

        window.location.href = "#home"; // Redirect to home section
    });

    document.querySelector(".btn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default behavior

        let contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".team-slider", {
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        slidesPerView: "auto", // Allow dynamic adjustment
        centeredSlides: true,  // Helps with looping properly
        autoplay: {
            delay: 3000, // Adjust timing as needed
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2.2,
            },
            991: {
                slidesPerView: 3.2,
            },
        },
    });
});
