let balls = [];

function setup() {
  let canvas = createCanvas(1200, 800);
  canvas.parent ('art')
  noFill ();
  background(10);

  // I created 100 balls with random positions, velocities, sizes, and colors
  for (let i = 0; i < 30; i++) {
    let ball = {
      x: width/2, //The balls starts from the centre of the screen
      y: height/2,
      radius: random(80, 250), //range
      stroke: color(random(255), random(110), random(210)),
    };
    balls.push(ball);
  }
}

function draw() {
  // The second 10 is opacity, used to create a semi-transparent background to make the trail effect
  background(10, 5);

  // Update and display each ball
  for (let i = 0; i < balls.length; i++) { //balls.length means number of balls
    let ball = balls[i]; // the variable 'ball' is used to customize each ball that is inside the 'balls' array

    // Update ball position based on velocity, increase the current horizontal position of the ball by its horizontal speed, "+=" means the value on the right-hand side is added to the variable on the left-hand side and assigns the result back to the right hand side.
    // Simulate Brownian motion by adding a small random displacement
    ball.x += random(-4, 4);
    ball.y += random(-4, 4);

    // Bounce off walls, "||" mean "true", so if either of these conditions are true then ball changes direction
    if (ball.x + ball.radius > width || ball.x - ball.radius < 0) {
      ball.speedX *= -1;
    }
    if (ball.y + ball.radius > height || ball.y - ball.radius < 0) {
      ball.speedY *= -1;
    }

    // Draw the ball
    stroke(ball.stroke);
    ellipse(ball.x, ball.y, ball.radius);
  }
 
}
