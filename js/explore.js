// var loadbtn = document.getElementById("load");
// loadbtn.addEventListener("click", function(){
//     var more = document.getElementById("more-content");
//     if(more.style.display === "none"){
//         more.style.display = "flex";
//         more.scrollIntoView({behavior:"smooth"});
//         loadbtn.innerText = "Load less..";
//     }
//     else{
//         more.style.display = "none";
//         loadbtn.innerText = "Load more..";
//     }
//     // document.getElementById("more-content").classList.add("show");
// });
$(document).ready(function () {
    var loadbtn = $("#load");
    $("#load").click(function () {
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
});