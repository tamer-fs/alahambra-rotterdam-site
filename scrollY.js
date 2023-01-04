document.addEventListener('scroll', () => {
    if (window.scrollY > 487) {
        document.getElementById("main").style.position = "fixed";
        document.getElementById("main").style.top = "0px";
        document.getElementById("main").style.width = "100vw";
        document.getElementById("main").style.zIndex = "1";
        document.getElementById("main").style.paddingBottom = "10px";
        document.getElementById("main").style.transition = "1s ease";
        document.getElementById("main").style.boxShadow = "0px 10px 10px rgba(0, 0, 0, 0.3)";
        document.documentElement.dataset.Drop = 100;
    } else {
        document.getElementById("main").style.position = "";
        document.getElementById("main").style.top = "";
        document.getElementById("main").style.width = "";
        document.getElementById("main").style.zIndex = "";
        document.getElementById("main").style.paddingBottom = "";
        document.getElementById("main").style.transition = "";
        document.documentElement.dataset.Drop = 0;
    }
    
});