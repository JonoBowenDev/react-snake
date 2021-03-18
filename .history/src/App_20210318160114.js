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
      
    </div>
  )
}

