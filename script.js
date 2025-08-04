document.getElementById("close-popup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});

    // Show/hide the scroll-to-top button
    window.onscroll = function() {
      var btn = document.getElementById("toTopBtn");
      if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    // Scroll to top functionality
    document.getElementById("toTopBtn").onclick = function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    };