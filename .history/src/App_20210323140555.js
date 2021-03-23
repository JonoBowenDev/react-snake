import React, { useState, useRef, useEffect } from 'react'
import { useInterval } from "./useInterval"; 
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
} from "./constants"; 
import randomMove from "./snakeAI"; 

export default function App() {

  // AI FEATURES 
  const snakeAI = true; // Set to false for human play

  const [applesEaten, setApplesEaten] = useState(0); 

  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [direction, setDirection] = useState();
  const [speed, setSpeed] = useState(null); 
  const [gameOver, setGameOver] = useState(false); 

  useInterval(() => gameLoop(), speed);

  // Collision functions
  const checkCollision = (piece, snk = snake) => {
    
    // Check walls
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0 
    )
      return true; 

    // Check Snake
    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true; 
    }
    return false; 
  }

  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  }

  // Gameplay functions 
  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDirection([0, -1, "UP", "DOWN"]) // up
    setSpeed(SPEED);
    setGameOver(false);
    setApplesEaten(0); 
  }

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  }

  const moveSnake = (keyCode) => {
    keyCode >= 37 && keyCode <= 40 && setDirection(DIRECTIONS[keyCode]); 
  }

  const createApple = () => apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE))); 

  const gameLoop = () => {

    const snakeCopy = JSON.parse(JSON.stringify(snake)); 

    // Snake AI
    if (snakeAI) {
      moveSnake(randomMove(direction)); 
    }
  
    const newSnakeHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]]; 
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame(); 
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop(); 
    setSnake(snakeCopy); 
  }

  useEffect(() => {
    // Setup
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
    
    // Snake
    context.fillStyle="pink";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1)); 
    
    // Apple
    context.fillStyle="lightblue";
    context.fillRect(apple[0], apple[1], 1, 1);

  }, [snake, apple, gameOver]); 

   

  return (
    <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e.keyCode)}>
      
      <canvas
        style={{ border: "1px solid black"}}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
        />

      {gameOver && 
        <div>
          GAME OVER!
          Apples Eaten: {applesEaten}
        </div>
      }

      <button onClick={startGame}>Start Game</button>

    </div>
  )
}

