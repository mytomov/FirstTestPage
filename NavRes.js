function dropDownMenu() {
    let x = document.getElementById("dropDownClick");

    if (x.className === "navTopLeft") {
        x.className += " responsive";
    }
    else {
        x.className = "navTopLeft";
    }
}
