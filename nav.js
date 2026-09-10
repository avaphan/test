document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });



    /* =========================
       SHRINK HEADER ON SCROLL
    ========================= */

    const header =
        document.querySelector(".site-header");


    window.addEventListener("scroll", function () {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });



    /* =========================
       HERO PARALLAX MOVEMENT
    ========================= */

    const heroContent =
        document.querySelector(".hero-content");

    const backgroundText =
        document.querySelector(".hero-background-text");


    window.addEventListener("scroll", function () {

        const scrollPosition =
            window.scrollY;


        if (scrollPosition < window.innerHeight) {

            heroContent.style.transform =
                `translateY(${scrollPosition * 0.08}px)`;


            backgroundText.style.transform =
                `translateX(${scrollPosition * 0.05}px)`;

        }

    });



    /* =========================
       SMOOTH NAVIGATION
    ========================= */

    const navLinks =
        document.querySelectorAll(
            '.nav-links a[href^="#"]'
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            }
        );

    });

});
