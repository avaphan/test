document.addEventListener("DOMContentLoaded", function () {

    const nav = document.getElementById("navigation");

    if (!nav) {
        return;
    }

    nav.innerHTML = `
        <nav class="main-navigation">
            <a href="index.html">About Me</a>
            <a href="research.html">Research</a>
            <a href="personal.html">Personal</a>
        </nav>
    `;


    // Highlight the page the visitor is currently viewing

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navigationLinks =
        nav.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});
