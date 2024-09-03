let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    const header = document.getElementById("main-header");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = "-150px"; 
    } else {
        header.style.top = "0";
    }
    
    lastScrollTop = scrollTop;
});
