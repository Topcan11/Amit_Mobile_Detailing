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

// Booking form submission handler
document.getElementById("booking-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const car = document.getElementById("car").value.trim();
  const details = document.getElementById("details").value.trim();

  // Prepare payload
  const payload = { name, email, car, details };

  // Show loading message
  const msgDiv = document.getElementById("form-message");
  msgDiv.textContent = "Sending booking request...";
  msgDiv.style.color = "#333";

  try {
    const res = await fetch("http://localhost:3000/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (res.ok) {
      msgDiv.textContent = data.message || "Booking request sent!";
      msgDiv.style.color = "green";
      document.getElementById("booking-form").reset();
    } else {
      msgDiv.textContent = data.message || "Failed to send booking request.";
      msgDiv.style.color = "red";
    }
  } catch (err) {
    msgDiv.textContent = "Network error. Please try again later.";
    msgDiv.style.color = "red";
  }
});