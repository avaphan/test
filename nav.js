// nav.js
// Creates the navigation bar used across the entire website.

document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.createElement("nav");

    navigation.className = "main-nav";

    navigation.innerHTML = `
        <div class="nav-name">
            <a href="index.html">Ava Phan</a>
        </div>

        <div class="nav-links">
            <a href="index.html">About Me</a>
            <a href="research.html">Research</a>
            <a href="personal.html">Personal</a>
        </div>
    `;

    // Adds the navigation to the top of the page
    document.body.prepend(navigation);
});
