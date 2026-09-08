document.addEventListener("DOMContentLoaded", function () {

    // Find the navigation area in the HTML
    const navigation =
        document.getElementById("navigation");


    // If the page does not contain the navigation area,
    // stop the script
    if (!navigation) {
        return;
    }


    // Add the navigation menu
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


    // Find the name of the current page
    let currentPage =
        window.location.pathname.split("/").pop();


    // GitHub Pages may show the homepage
    // without displaying index.html
    if (currentPage === "") {
        currentPage = "index.html";
    }


    // Get all of the top navigation links
    const links =
        navigation.querySelectorAll(
            ".main-navigation a"
        );


    // Highlight whichever page is currently open
    links.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");


        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });

});
