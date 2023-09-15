var menubtn = document.querySelector(".menu");
var dropdown = document.querySelector("#dropdown")
var flag = 0;
menubtn.addEventListener("click", function () {
    if (flag == 0) {
        dropdown.style.display = "block";
        dropdown.style.display = "grid";
        flag = 1;
    }
    else {
        dropdown.style.display = "none";
        flag = 0;
    }
})