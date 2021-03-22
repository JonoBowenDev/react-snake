import React from 'react'
import {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS
  } from "./constants"; 

function randomMove() {
    const randomElement = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
    console.log(randomElement); 
    return (randomElement); 
}

export default randomMove; 
