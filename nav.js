document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       HIGHLIGHT CURRENT PAGE
    ====================================================== */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    const navigationLinks =
        document.querySelectorAll(
            ".top-navigation a, .side-navigation a"
        );


    navigationLinks.forEach(function (link) {

        const destination =
            link.getAttribute("href");


        if (destination === currentPage) {

            link.classList.add("active");

            if (link.classList.contains("side-link")) {

                link.classList.add("selected");

            }

        }

    });



    /* =====================================================
       SMOOTH SCROLL FOR LINKS ON THE CURRENT PAGE
    ====================================================== */

    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');


    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID =
                link.getAttribute("href");


            if (targetID === "#") {
                return;
            }


            const target =
                document.querySelector(targetID);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });



    /* =====================================================
       CONTENT APPEARS WHEN SCROLLING
    ====================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });



    /* =====================================================
       HERO IMAGE SUBTLE MOVEMENT
    ====================================================== */

    const heroImage =
        document.querySelector(".hero-image");


    window.addEventListener("scroll", function () {

        if (!heroImage) {
            return;
        }


        const hero =
            document.querySelector(".hero-section");


        const heroPosition =
            hero.getBoundingClientRect();


        if (
            heroPosition.bottom > 0 &&
            heroPosition.top < window.innerHeight
        ) {

            const movement =
                heroPosition.top * -0.025;


            heroImage.style.transform =
                `scale(1.04) translateY(${movement}px)`;

        }

    });



    /* =====================================================
       AP LOGO SUBTLE MOVEMENT
    ====================================================== */

    const logo =
        document.querySelector(".ap-logo");


    if (logo) {

        logo.addEventListener("mousemove", function (event) {

            const rectangle =
                logo.getBoundingClientRect();


            const x =
                event.clientX - rectangle.left;


            const y =
                event.clientY - rectangle.top;


            const rotateX =
                ((y / rectangle.height) - 0.5) * -5;


            const rotateY =
                ((x / rectangle.width) - 0.5) * 5;


            logo.style.transform =
                `perspective(500px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.03)`;

        });


        logo.addEventListener("mouseleave", function () {

            logo.style.transform =
                "perspective(500px) rotateX(0) rotateY(0) scale(1)";

        });

    }

});
