const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let blobs = [];

window.addEventListener("mousemove", (e) => {
  if (blobs.length < 30) {
    blobs.push({
      x: e.clientX,
      y: e.clientY,
      radius: 50,
      alpha: 0.12
    });
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  blobs.forEach((blob, index) => {
    blob.radius += 0.7;
    blob.alpha -= 0.002;

    ctx.beginPath();
    ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);

    ctx.fillStyle = `rgba(245,239,230,${blob.alpha})`;
    ctx.fill();

    if (blob.alpha <= 0) blobs.splice(index, 1);
  });

  requestAnimationFrame(animate);
}

animate();