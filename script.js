// ===============================
// RESTAURANT WEBSITE JAVASCRIPT
// ===============================


// Reservation Form
const reservationForm = document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    if (!name || !phone || !date || !time || !guests) {

        alert("Please fill all the details.");

        return;
    }

    alert(
        "Thank you, " + name +
        "!\n\nYour table reservation request has been received." +
        "\n\nDate: " + date +
        "\nTime: " + time +
        "\nGuests: " + guests
    );

    reservationForm.reset();
});


// Smooth Navigation

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Simple Scroll Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


sections.forEach(function (section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(section);

});
