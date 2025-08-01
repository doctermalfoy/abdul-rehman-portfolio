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
  const menuIcon = document.getElementById("menu_item");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");

  // Toggle hamburger menu and icon
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("show");
    menuIcon.classList.toggle("active");
  });

  // Close navbar when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("show");
      menuIcon.classList.remove("active");
    });
  });
});


