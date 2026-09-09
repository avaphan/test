document.addEventListener("DOMContentLoaded", function () {

    const navigation =
        document.getElementById("navigation");


    if (!navigation) {
        return;
    }


    navigation.innerHTML = `
        <nav class="main-nav">

            <div class="nav-brand">

                <a href="index.html">
                    Ava Phan
                </a>

            </div>


            <div class="nav-links">

                <a href="index.html">
                    About Me
                </a>

                <a href="research.html">
                    Research
                </a>

                <a href="personal.html">
                    Personal
                </a>

            </div>

        </nav>
    `;


    let currentPage =
        window.location.pathname.split("/").pop();


    if (currentPage === "") {
        currentPage = "index.html";
    }


    const links =
        navigation.querySelectorAll(".nav-links a");


    links.forEach(function (link) {

        if (
            link.getAttribute("href") === currentPage
        ) {

            link.classList.add("active");

        }

    });

});
