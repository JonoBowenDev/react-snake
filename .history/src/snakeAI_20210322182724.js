import React from 'react'
import {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS
  } from "./constants"; 

function randomMove(currentDirection) {
    const directions = [38, 40, 37, 39]
    const randomElement = directions[Math.floor(Math.random() * directions.length)];

    

    console.log(DIRECTIONS[randomElement]);
    console.log(currentDirection); 
    
    return (randomElement); 
}

export default randomMove; 
