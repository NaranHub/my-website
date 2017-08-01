function responsiveNavBar() {
    var x = document.getElementById("topNavigationBar");
    if (x.className === "navigationBar") {
        x.className += "-responsive";
    } else {
        x.className = "navigationBar";
    }
}