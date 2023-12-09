let balls = [];

function setup() {
  let canvas = createCanvas(windowWidth, 800);
  canvas.parent ('art')
  noFill();
  background(10);

  // I created 60 balls with random positions, velocities, sizes, and colors
  for (let i = 0; i < 100; i++) {
    let ball = {
      x: random(width), // The balls start from random positions on the screen
      y: random(height),
      radius: random(100, 600), // Ranges
      speedX: random(-1, 1),
      speedY: random(-1, 1),
      stroke: color(random(255), random(110), random(210)),
    };
    balls.push(ball);
  }
}

function draw() {
  // The second 10 is opacity, used to create a semi-transparent background to make the trail effect
  background(10, 2);

 
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

    
    // Draw the ball
    stroke(ball.stroke);
    ellipse(ball.x, ball.y, ball.radius* 2);
  }
}