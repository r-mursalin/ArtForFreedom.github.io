let balls = [];
const attractionForce = 5;
let maxAttractionForce = 10;

function setup() {
  let canvas = createCanvas(1360, 800);
  canvas.parent ('art')
  noFill();
  background(10);

  // I created 60 balls with random positions, velocities, sizes, and colors
  for (let i = 0; i < 100; i++) {
    let ball = {
      x: width/2,
      y: height/2,
      radius: random(10, 120),
      speedX: random(-3, 3),
      speedY: random(-3, 3),
      stroke: color(random(255), random(90), random(210)),
      targetColor: null,
    };
    balls.push(ball);
  }
}

function draw() {
  background(10, 25);

  // Update and display each ball inside the circular mask
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];

    // Update ball position based on velocity
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    // Bounce off walls
    if (ball.x + ball.radius > width || ball.x - ball.radius < 0) {
      ball.speedX *= -1;
    }
    if (ball.y + ball.radius > height || ball.y - ball.radius < 0) {
      ball.speedY *= -1;
    }

  

    // Draw the ball with the updated stroke color
    stroke(ball.stroke);
    ellipse(ball.x, ball.y, ball.radius * 2);
  }
}

function mouseClicked() {
  // Apply attraction force towards the mouse position only when the mouse is clicked
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];

    let dx = mouseX - ball.x;
    let dy = mouseY - ball.y;
    let distanceToMouse = dist(ball.x, ball.y, mouseX, mouseY);

    // Map the attraction force based on the distance to the mouse
    let attractionForce = map(distanceToMouse, 0, width, 0, maxAttractionForce);

    ball.speedX = dx * attractionForce / distanceToMouse;
    ball.speedY = dy * attractionForce / distanceToMouse;
    
  }
}