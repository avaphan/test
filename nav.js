document.addEventListener("DOMContentLoaded", function () {

    // Locate the navigation area in the HTML
    const navigation = document.getElementById("navigation");


    // Stop the script if the navigation area does not exist
    if (!navigation) {
        return;
    }


    // Create navigation links
    navigation.innerHTML = `
        <nav class="main-navigation">

            <a href="index.html">
                About Me
            </a>

            <a href="research.html">
                Research
            </a>

            <a href="personal.html">
                Personal
            </a>

        </nav>
    `;


    // Determine which page the user is currently viewing
    let currentPage =
        window.location.pathname.split("/").pop();


    // GitHub Pages may load the homepage without "index.html"
    if (currentPage === "") {
        currentPage = "index.html";
    }


    // Get all navigation links
    const links =
        navigation.querySelectorAll(".main-navigation a");


    // Highlight the current page
    links.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");


        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });

});
