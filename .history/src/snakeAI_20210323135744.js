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
    
    // while (randomElement === oppositeDirection) {
    //     randomElement = directions[Math.floor(Math.random() * directions.length)];
    // }
    
    // Check that the new direction isn't the opposite of the current direction
    while (DIRECTIONS[randomElemen][2] === currentDirection[3]) {

    }

    console.log(DIRECTIONS[randomElement][2]);
    console.log(currentDirection[3]) 
    
    return (randomElement); 
}

export default randomMove; 
