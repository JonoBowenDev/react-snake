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
    const directions = Object.keys(DIRECTIONS)

    // GET THE OPPOSITE TO THE CURRENT DIRECTION

    let randomElement = directions[Math.floor(Math.random() * directions.length)];
    
    // Check that the new direction isn't the opposite of the current direction
    // i.e. Make sure the snake doesn't turn around on itself
    while (DIRECTIONS[randomElement][2] === currentDirection[3]) {
        randomElement = directions[Math.floor(Math.random() * directions.length)];
    }

    console.log(DIRECTIONS[randomElement][2]);
    console.log(currentDirection[3]) 
    
    return (randomElement); 
}

export default randomMove; 
