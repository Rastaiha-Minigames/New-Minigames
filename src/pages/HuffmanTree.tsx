import React from "react";
import {
  Slider,
  Chip,
  Container,
} from '@mui/material';

// https://developpaper.com/js-implementation-of-huffman-tree/
// https://github.com/saliherdemk/Optimal-Huffman-Tree

const ImageAdjustment = () => {
  return (
    <Container>
      <Chip label="Chip Outlined" variant="outlined" />
      <Slider defaultValue={30} />
    </Container>
  );
}

export default ImageAdjustment;