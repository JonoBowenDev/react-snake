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
    const directions = [DIRECTIONS[0], DIRECTIONS[1], DIRECTIONS[2], DIRECTIONS[3]]
    const randomElement = directions[Math.floor(Math.random() * directions.length)];
    console.log(DIRECTIONS[0][0]); 
    return (37); 
}

export default randomMove; 
