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
    let randomElement = currentDirection;
    console.log(currentDirection);
    console.log(DIRECTIONS[38])
    if (currentDirection == DIRECTIONS[38]) {
        console.log("YEET"); 
    }
    // while (DIRECTIONS[randomElement] !== currentDirection) {
        // randomElement = directions[Math.floor(Math.random() * directions.length)];
    // }
    
    return (randomElement); 
}

export default randomMove; 
