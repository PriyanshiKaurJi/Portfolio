const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }

  draw() {
    ctx.fillStyle = "#00ffcc";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].size <= 0.3) {
      particles.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.fillStyle = "rgba(15, 15, 15, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

canvas.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 6; i++) {
    particles.push(
      new Particle(
        e.x,
        e.y,
        Math.random() * 5 + 2,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      )
    );
  }
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();

new TypeIt("#profileName", {
  strings: "Priyanshi Kaur",
  speed: 100,
  waitUntilVisible: true,
  loop: true,
  breakLines: false,
  deleteSpeed: 50,
  nextStringDelay: 2000
}).go();

// Ambient Sound Control via Howler (optional if you want to use Howler over native audio tag)
const sound = new Howl({
  src: ["sounds/loop.mp3"],
  loop: true,
  volume: 0.3
});
sound.play();
