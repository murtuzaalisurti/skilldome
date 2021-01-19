document.addEventListener("DOMContentLoaded", function () {
    var btn1 = document.querySelector("#cta-btn-1");
    console.log(btn1);
    btn1.addEventListener("click", function () {
        document.getElementById("different-skills").scrollIntoView({ behavior: "smooth" });

    });
    // const hamburger = document.querySelector(".menu-content");
    // const navLinks = document.querySelector(".menulist");
    // const links = document.querySelectorAll(".menulist li");
    // const lines = document.querySelectorAll(".line");

    // hamburger.addEventListener("click", () => {
    //     navLinks.classList.toggle("open");
    //     links.forEach(link => {
    //         link.classList.toggle("fade");
    //     });
    //     hamburger.classList.toggle("position-fixed");
    //     for(i=0; i<lines.length; i++){
    //         lines[i].classList.toggle("cross");
    //     }
    //     document.getElementsByClassName("line")[2].classList.toggle("cross-opp");
    //     document.getElementsByClassName("line")[1].classList.toggle("gone");
    // });
});

