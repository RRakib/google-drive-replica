let rightOptions = document.getElementById('right-click-options');

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
    rightOptions.classList.remove("animate-right-click");
    if(e.target !== rightOptions) {
        rightOptions.style.display = 'none'
        setTimeout(() => {
                rightOptions.style.display = 'block'
                rightOptions.style.top = e.clientY + 'px';
                rightOptions.style.left = e.clientX + 'px';
                rightOptions.classList.add("animate-right-click");
        }, 100)
    }

}, false);


document.addEventListener("click", function(e){
    if(e.target !== rightOptions) {
        rightOptions.style.display = 'none'
    }

});