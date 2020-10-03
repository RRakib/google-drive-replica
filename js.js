let nav = document.getElementById('nav');
let right = document.getElementById('right');
let rightOptions = document.getElementById('right-click-options');

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

right.addEventListener("contextmenu", function(e){
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
});


document.addEventListener("click", function(e){
    if(e.target !== rightOptions) {
        rightOptions.style.display = 'none'
    }
});