const clickSound = new Audio("sound/sound.mp3");
const inkeBtn = document.querySelectorAll("a").length;

for (var i = 0; i < inkeBtn; i++) {
  document.querySelectorAll("a")[i].addEventListener("click", function () {
    clickSound.play();
  });
}
const galleries = {
  Front: {
    index: 0,
    items: [
      { src: "icons/icons8-html-48.png", text: "HTML", width: "80%" },
      { src: "icons/icons8-css-48.png", text: "CSS", width: "70%" },
      { src: "icons/icons8-js-48.png", text: "JaveScript", width: "60x" },
      {
        src: "icons/icons8-bootstrap-48.png",
        text: "Bootstrap",
        width: "80%",
      },
      { src: "icons/icons8-jquery-50.png", text: "Jquery", width: "60%" },
      {
        src: "icons/icons8-responsive-design-53.png",
        text: "Responsive",
        width: "100%",
      },
    ],
  },
  Back: {
    index: 0,
    items: [
      { src: "icons/icons8-python-48.png", text: "Python", width: "80%" },
      {
        src: "icons/icons8-typescript-48.png",
        text: "Typescript",
        width: "0%",
      },
      { src: "icons/icons8-node-js-48.png", text: "Node.js", width: "0%" },
    ],
  },
  Design: {
    index: 0,
    items: [
      { src: "icons/icons8-figma-48.png", text: "Figma", width: "70%" },
      { src: "icons/icons8-canva-48.png", text: "Canva", width: "100%" },
      {
        src: "icons/icons8-typography-66.png",
        text: "Typography",
        width: "90%",
      },
    ],
  },
  Tools: {
    index: 0,
    items: [
      { src: "icons/icons8-vs-code-48.png", text: "Vs code", width: "80%" },
      { src: "icons/icons8-terminal-50.png", text: "Terminal", width: "100%" },
      { src: "icons/icons8-git-50.png", text: "Git", width: "70%" },
      { src: "icons/icons8-github-30.png", text: "Github", width: "70%" },
      { src: "icons/icons8-npm-24 (2).png", text: "npm", width: "0%" },
    ],
  },
  Languages: {
    index: 0,
    items: [
      { src: "icons/icons8-english-48.png", text: "English", width: "70%" },
      { src: "icons/icons8-france-48.png", text: "French", width: "60%" },
      {
        src: "icons/icons8-united-arab-emirates-48.png",
        text: "Arabic",
        width: "100%",
      },
    ],
  },
  Soft: {
    index: 0,
    items: [
      {
        src: "icons/icons8-problem-solving-100.png",
        text: "problem-solving",
        width: "80%",
      },
      {
        src: "icons/icons8-communication-50.png",
        text: "communication",
        width: "80%",
      },
      { src: "icons/icons8-teamwork-50.png", text: "teamwork", width: "90%" },
    ],
  },
};
function showGalleryImage(galleryName) {
  const description = galleries[galleryName];
  const current = description.items[description.index];

  document.getElementById("image-" + galleryName).src = current.src;
  document.getElementById("text-" + galleryName).textContent = current.text;
  document.getElementById("progress-" + galleryName).style.width =
    current.width;
}
function next(galleryName) {
  const description = galleries[galleryName];
  if (description.index < description.items.length - 1) {
    description.index++;
    showGalleryImage(galleryName);
  }
}
function prev(galleryName) {
  const description = galleries[galleryName];
  if (description.index > 0) {
    description.index--;
    showGalleryImage(galleryName);
  }
}
const lines = document.querySelectorAll(".line");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
      } else {
        entry.target.classList.remove("visible");
        entry.target.classList.add("hidden");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

lines.forEach((line) => {
  observer.observe(line);
});

AOS.init();

const sidebar = document.getElementById("mobileSidebar");
sidebar.addEventListener("hidden.bs.offcanvas", () => {
  if (!location.hash || location.hash === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

document.querySelectorAll(".nav-item").forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  });
});
