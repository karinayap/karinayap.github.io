document.addEventListener("DOMContentLoaded", function() {
    fetch("front-ends.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then(data => {
        document.getElementById("header-container").innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading header:", error);
      });
  });