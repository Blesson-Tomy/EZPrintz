var subform = document.getElementById("sheetdb-form");

subform.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(subform.action, 
    {
        method: "POST",
        body: new FormData(
        document.getElementById("sheetdb-form")
        ),
    })
    .then((response) => response.json())
    .then((html) => 
        {
            confirm("Form submitted successfully! Do you want to go to the index page?")
                window.location.href = "index.html";
        
    }); 
});

