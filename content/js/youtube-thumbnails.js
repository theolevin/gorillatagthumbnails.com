document.addEventListener("DOMContentLoaded", function(event) { 
    
    var icons = document.querySelectorAll(".icon-img");
    icons.forEach(x => {
        var url = x.src;
        x.addEventListener('click', x => window.open(url, '_blank'));
    })
});