document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const closeBtn = document.getElementById("close-btn");

    menuToggle.addEventListener("click", () => {
        sideMenu.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        sideMenu.classList.remove("open");
    });

    // le reste de ton code ici...
});
const canvas = document.getElementById("waterCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ripples = [];
function drawRipple(x, y) {
  ripples.push({ x, y, radius: 0, alpha: 1 });
}

function animateRipples() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Effet fond fluide
  let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "rgba(0, 100, 150, 0.1)");
  gradient.addColorStop(1, "rgba(0, 150, 200, 0.1)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Ondes
  ripples.forEach((r, i) => {
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(0, 200, 255, ${r.alpha})`;
    ctx.lineWidth = 2;
    ctx.stroke();
    r.radius += 2;
    r.alpha -= 0.02;
    if (r.alpha <= 0) ripples.splice(i, 1);
  });

  requestAnimationFrame(animateRipples);
}
animateRipples();

document.querySelectorAll(".year").forEach(year => {
  year.addEventListener("click", e => {
    document.querySelectorAll(".year").forEach(y => y.classList.remove("selected"));
    year.classList.add("selected");

    // Crée un effet ricochet sur clic
    const rect = year.getBoundingClientRect();
    drawRipple(rect.left + rect.width / 2, rect.top + rect.height / 2);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");
  const line = document.querySelector(".line");

  items.forEach(item => {
    item.addEventListener("click", () => {
      // Retirer sélection précédente
      items.forEach(el => el.classList.remove("selected"));
      // Sélectionner l'élément cliqué
      item.classList.add("selected");
      // Activer cascade lumineuse
      line.classList.add("cascade");
    });
  });
});

document.querySelectorAll('.ripple-container').forEach(item => {
  item.addEventListener('click', function(e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');

    // Position du clic par rapport à l’élément
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    item.appendChild(circle);

    // Supprime le cercle après animation
    circle.addEventListener('animationend', () => {
      circle.remove();
    });
  });
});



 

  

    