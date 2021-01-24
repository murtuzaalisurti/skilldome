document.addEventListener("DOMContentLoaded", function () {
    // const course = document.querySelectorAll(".course-cta");
    // const course_content_contain = document.querySelectorAll(".content");
    // console.log(course);


    // course.addEventListener("mouseover", function(){
    //     course_content_contain.forEach(a => {
    //         a.addEventListener("mouseover", function(){
    //             a.classList.add("content-click");
    //         });
    //     });
    // });


    // course.forEach(a => {
    //     a.classList.add("content-click");
    // });


    // for(let i=0; i<course.length; i++){
    //     course[i].addEventListener("mouseover", function(){
    //         console.log("trigerred");
    //         course_content_contain.forEach(a => {
    //             a.addEventListener("mouseover", function(){
    //                 a.classList.add("content-click");
    //             });
    //             a.addEventListener("mouseleave", function(){
    //                 a.classList.remove("content-click");
    //             })
    //         })
    //     })
    // }


    // course.forEach(b => {
        // course_content_contain.forEach(c => {
        //     c.addEventListener("mouseover", function(){
        //         c.classList.add("content-click");
        //     });
        //     c.addEventListener("mouseleave", function(){
        //         c.classList.remove("content-click");
        //     })
        // })
    // })

    // course.forEach(b => {
    //     b.addEventListener("mouseover", function(){
    //         course_content_contain.forEach(c => {
    //             // c.addEventListener("mouseover", function(){
    //                 c.classList.add("content-click");
    //             // });
    //             // c.addEventListener("mouseleave", function(){
    //                 c.classList.remove("content-click");
    //             // })
    //         })
    //     })
    //     // course_content_contain.forEach(c => {
    //     //     c.addEventListener("mouseover", function(){
    //     //         c.classList.add("content-click");
    //     //     });
    //     //     c.addEventListener("mouseleave", function(){
    //     //         c.classList.remove("content-click");
    //     //     })
    //     // })
    // })


    // for(i=0; i<course.length; i++){
    //     course[i].addEventListener("mouseover", function(){
    //         course.forEach(c => {
    //             c.classList.add("content-click");
    //         })
    //         // course[i].classList.add("content-click");
    //     });
    // }
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