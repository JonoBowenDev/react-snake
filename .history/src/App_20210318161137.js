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

export default function App() {

  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [direction, setDirection] = useState([0, -1]);
  const [speed, setSpeed] = useState(null); 
  const [gameOver, setGameOver] = useState(false); 


  // Collision functions
  const checkCollosion = () => {
    
  }

  const checkAppleCollision = () => {
    
  }

  // Gameplay functions 
  const startGame = () => {

  }

  const endGame = () => {
    
  }

  const moveSnake = () => {
    
  }

  const createApple = () => {
    
  }

  const gameLoop = () => {
    
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
    <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
      
      <canvas
        style={{ border: "1px solid black"}}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
        />

      {gameOver && <div>GAME OVER!</div>}

      <button onClick={startGame}>Start Game</button>

    </div>
  )
}

