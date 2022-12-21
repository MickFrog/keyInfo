window.addEventListener('keydown', function(e) {
    // Display key Code
    const kCode = document.getElementById("keyCode");
    if(kCode) {
        kCode.textContent = e.keyCode;
    }

    //Display key Content
    const kContent = document.getElementById("keyContent");
    if(kContent) {
        if(e.key === " ") {
            kContent.textContent = "Space";
        } else {
            kContent.textContent = e.key;
        }
    }
});
