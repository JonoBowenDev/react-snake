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
    console.log(DIRECTIONS[40]); 
    return (DIRECTIONS[38]); 
}

export default randomMove; 
