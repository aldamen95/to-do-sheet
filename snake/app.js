document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const squares = document.querySelectorAll(".grid div");
  let speed = 9;
  const interval = 100;
  let timeInterval = null;
  let snake = [2, 1, 0];
  let direction = 1;
  const width = 10;

  function resetGame() {}

  function startGame() {
    snake = [2, 1, 0];
    direction = 1;
    speed = 9;
    squares.forEach((square) => {
      square.classList.remove("snake");
    });
    snake.forEach((index) => {
      squares[snake[index]].classList.add("snake");
    });
    timeInterval = setInterval(moveSnake, interval);
  }

  snake.forEach((index) => {
    squares[index].classList.add("snake");
  });
  //  squares.forEach((square, index) => {
  //    square.textContent = index;
  //  });

  function moveSnake() {
    // Snake hits itself
    if (squares[snake[0] + direction]?.classList.contains("snake")) {
      clearInterval(timeInterval);
      startGame();
    }

    // Wrapping logic for boundaries
    if (snake[0] % width === width - 1 && direction === 1) {
      // Right edge: Wrap to the left of the same row
      snake.unshift(snake[0] - (width - 1));
    } else if (snake[0] % width === 0 && direction === -1) {
      // Left edge: Wrap to the right of the same row
      snake.unshift(snake[0] + (width - 1));
    } else if (snake[0] + width >= width * width && direction === width) {
      // Bottom edge: Wrap to the top of the same column
      snake.unshift(snake[0] - width * (width - 1));
    } else if (snake[0] - width < 0 && direction === -width) {
      // Top edge: Wrap to the bottom of the same column
      snake.unshift(snake[0] + width * (width - 1));
    } else {
      // Normal movement
      snake.unshift(snake[0] + direction);
    }

    // Remove tail
    const tail = snake.pop();
    squares[tail].classList.remove("snake");

    // Add new head
    squares[snake[0]].classList.add("snake");

    // Check for apple
    if (squares[snake[0]].classList.contains("apple")) {
      // Snake eats the apple
      snake.push(tail); // Grow by adding tail back
      squares[snake[0]].classList.remove("apple");
      randomApple();
    }
  }

  function randomApple() {
    do {
      appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.contains("apple"));
    {
      squares[appleIndex].classList.add("apple");
    }
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "k") {
      direction = -width;
    } else if (e.key === "j") {
      direction = +width;
    } else if (e.key === "h") {
      direction = -1;
    } else if (e.key === "l") {
      direction = 1;
    }
  });

  //}
  startGame();
  randomApple();
});
