import React from "react";
import {
  Slider,
  Chip,
  Container,
} from '@mui/material';


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