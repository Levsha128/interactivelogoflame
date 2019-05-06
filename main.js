let canvas = document.getElementById("screen");
let ctx = canvas.getContext("2d");

const width = 800;
const height = 500;

ctx.fillStyle = '#FF0000';
ctx.fillRect(0,0,width,height);

drawCircle = (x, y, r) => {
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
};


let x_c = 77;
let y_c = 45;
let x_step = 10;
let y_step = 10;
let x_offset = 20;
let y_offset = 20;
let base_r = 3;
for (let i = 0; i < x_c; i++) {
  for (let j = 0; j < y_c; j++) {
    let r = base_r * Math.random();
    drawCircle(x_offset + i * x_step, y_offset + j * y_step, r);
  }
}

