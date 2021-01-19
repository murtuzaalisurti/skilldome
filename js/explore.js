document.addEventListener("DOMContentLoaded", function () {
    var loadbtn = document.getElementById("load");
    loadbtn.addEventListener("click", function () {
        var more = document.getElementById("more-content");
        if (more.style.display === "none") {
            more.style.display = "flex";
            more.scrollIntoView({ behavior: "smooth" });
            loadbtn.innerText = "Load less..";
        }
        else {
            more.style.display = "none";
            loadbtn.innerText = "Load more..";
        }
        // document.getElementById("more-content").classList.add("show");
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
    //     for (i = 0; i < lines.length; i++) {
    //         lines[i].classList.toggle("cross");
    //     }
    //     document.getElementsByClassName("line")[2].classList.toggle("cross-opp");
    //     document.getElementsByClassName("line")[1].classList.toggle("gone");
    // });
});


// var loadbtn = document.getElementById("load");
// loadbtn.addEventListener("click", function () {
//     var more = document.getElementById("more-content");
//     if (more.style.display === "none") {
//         more.style.display = "flex";
//         more.scrollIntoView({ behavior: "smooth" });
//         loadbtn.innerText = "Load less..";
//     }
//     else {
//         more.style.display = "none";
//         loadbtn.innerText = "Load more..";
//     }
//     // document.getElementById("more-content").classList.add("show");
// });



// $(document).ready(function () {
//     var loadbtn = $("#load");
//     $("#load").click(function () {
//         var more = document.getElementById("more-content");
//         if (more.style.display === "none") {
//             more.style.display = "flex";
//             more.scrollIntoView({ behavior: "smooth" });
//             loadbtn.innerText = "Load less..";
//         }
//         else {
//             more.style.display = "none";
//             loadbtn.innerText = "Load more..";
//         }
//         // document.getElementById("more-content").classList.add("show");
//     });
// });