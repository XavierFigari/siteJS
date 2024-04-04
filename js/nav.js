// ======================== DROPDOWN ========================

document.getElementById('menuBtn').onclick = () => toggleDropdown(false);

function toggleDropdown(closeOnly) {
    const dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else if (closeOnly === false){
        dropdownContent.style.display = "block";
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        toggleDropdown(true);
    }
}

