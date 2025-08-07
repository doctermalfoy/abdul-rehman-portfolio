
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  };

  


 document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".hover-video");

  // Desktop: Hover to play/pause
  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  // Mobile: Tap to play, tap again to pause others
  let activeVideo = null;

  videos.forEach((video) => {
    video.addEventListener("touchstart", (e) => {
      if (activeVideo && activeVideo !== video) {
        activeVideo.pause();
        activeVideo.currentTime = 0;
      }

      if (video.paused) {
        video.play();
        activeVideo = video;
      } else {
        video.pause();
        video.currentTime = 0;
        activeVideo = null;
      }

      e.stopPropagation();
    });
  });

  // Tap anywhere else stops the video
  document.body.addEventListener("touchstart", () => {
    if (activeVideo) {
      activeVideo.pause();
      activeVideo.currentTime = 0;
      activeVideo = null;
    }
  });
});





  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("formMessage");

    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // prevent page reload

      // Hide previous messages
      messageBox.style.display = "none";
      messageBox.textContent = "";

      const formData = new FormData(form);

      try {
        const response = await fetch("https://formsubmit.co/ajax/doctermalfoy@gmail.com", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });

        if (response.ok) {
          messageBox.textContent = "✅ Message sent successfully!";
          messageBox.style.color = "green";
          messageBox.style.display = "block";
          form.reset();
        } else {
          messageBox.textContent = "❌ Failed to send. Please try again.";
          messageBox.style.color = "red";
          messageBox.style.display = "block";
        }
      } catch (error) {
        messageBox.textContent = "⚠️ Network error. Try again later.";
        messageBox.style.color = "red";
        messageBox.style.display = "block";
      }
    });
  });


//------------------------responsive---------------------------
  

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu_item");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");

  // Toggle hamburger menu
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("show");
    menuIcon.classList.toggle("active");
  });

  // Close menu on nav link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("show");
      menuIcon.classList.remove("active");
    });
  });
});





