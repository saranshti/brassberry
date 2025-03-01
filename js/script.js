document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".navi-link");  
  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      // Add active class to the clicked link
      links.forEach(function(item) {
        item.classList.remove("active");
      });
      this.classList.add("active");
      const targetId = this.getAttribute("data-target");
     	const targetContainer = document.getElementById(targetId);
      targetContainer.classList.add("mari");
    });
  });
});
