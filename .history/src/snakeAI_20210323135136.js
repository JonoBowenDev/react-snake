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
    const directions = [DIRECTIONS.keys()]

    // GET THE OPPOSITE TO THE CURRENT DIRECTION

    let randomElement = directions[Math.floor(Math.random() * directions.length)];
    
    // while (randomElement === oppositeDirection) {
    //     randomElement = directions[Math.floor(Math.random() * directions.length)];
    // }
    

    console.log(DIRECTIONS[randomElement]);
    console.log(currentDirection); 
    
    return (randomElement); 
}

export default randomMove; 
