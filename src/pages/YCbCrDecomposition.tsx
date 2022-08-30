import React from "react";
import {
  Slider,
  Chip,
  Container,
} from '@mui/material';


// var canvas: any = document.getElementById('viewport'),
// const context = canvas.getContext('2d');

// https://stackoverflow.com/questions/13669404/typescript-problems-with-type-system
// https://stackoverflow.com/questions/6011378/how-to-add-image-to-canvas

// make_base();

// function make_base() {
//   base_image = new Image();
//   base_image.src = 'img/base.png';
//   base_image.onload = function () {
//     context.drawImage(base_image, 0, 0);
//   }
// }

// function colorFilter() {
//   //Access the canvas
//   const c = document.getElementById("canvas1");
//   const context = c.getContext("2d");

//   //Declare variables
//   var imgData = context.getImageData(0, 0, canvas1.width, canvas1.height);
//   var data = imgData.data;

//   var red = new Array();
//   var green = new Array();
//   var blue = new Array();
//   var alpha = new Array();



//   //Read image and make changes on the fly as it's read  
//   for (let i = 0; i < data.length; i += 4) {
//     red[i] = imgData.data[i];
//     if (red[i] == 0) red[i] = 255;
//     green[i] = imgData.data[i + 1];
//     if (green[i] == 0) green[i] = 255;
//     blue[i] = imgData.data[i + 2]; // no change, blue == 0 for black and for yellow
//     alpha[i] = imgData.data[i + 3]; // Again, no change
//   }

//   // Write the image back to the canvas
//   for (let i = 0; i < data.length; i += 4) {
//     imgData.data[i] = red[i];
//     imgData.data[i + 1] = green[i];
//     imgData.data[i + 2] = blue[i];
//     imgData.data[i + 3] = alpha[i];
//   }

//   context.putImageData(imgData, 0, 0);
// }

const ImageAdjustment = () => {

  return (
    <Container>
      <img src='' />
      <Chip label="Chip Outlined" variant="outlined" />
      <Slider defaultValue={30} />
    </Container>
  );
}

export default ImageAdjustment;
