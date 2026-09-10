document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("navigation");

    if (!navigation) {
        return;
    }


    navigation.innerHTML = `
        <nav class="top-navigation">

            <a href="index.html">
                About Me
            </a>

            <a href="research.html">
                Research
            </a>

            <a href="personal.html">
                Personal
            </a>

            <a href="services.html">
                Services
            </a>

            <a href="#contact">
                Contact
            </a>

        </nav>
    `;


    /* CURRENT PAGE */

    let currentPage =
        window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }


    const navLinks =
        navigation.querySelectorAll(".top-navigation a");


    navLinks.forEach(function (link) {

        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("current-link");
        }

    });


    /* SMOOTH SCROLL */

    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');


    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const id = link.getAttribute("href");
            const target = document.querySelector(id);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* SCROLL ANIMATIONS */

    const elements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    elements.forEach(function (element) {

        observer.observe(element);

    });

});
