document.addEventListener("DOMContentLoaded", function(event) { 
    var partials = document.querySelectorAll("[data-partial]");

    partials.forEach(async x => {
        var partial     = x.attributes['data-partial'].value;
        var url         = `/partials/${partial}.html`;
        
        const response  = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const html = await response.text();
          x.innerHTML = html;
    })
});