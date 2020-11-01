// Shree KRISHNAya Namaha
// Scripts used by navigation panel

// Script to open and close sidebar
function w3_open() {
    document.getElementById("nav_panel").style.display = "block";
    document.getElementById("content_overlay").style.display = "block";
}

function w3_close() {
    document.getElementById("nav_panel").style.display = "none";
    document.getElementById("content_overlay").style.display = "none";
}
