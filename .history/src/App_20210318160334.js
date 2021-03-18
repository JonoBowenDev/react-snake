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
    </div>
  )
}

