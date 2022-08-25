import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ImageAdjustment from '../pages/ImageAdjustment';
import RazooDictionary from '../pages/RazooDictionary';
import HuffmanTree from '../pages/HuffmanTree';

const Root = () => {
  return (
    <Routes>
      <Route path="/image-adjustment/" element={<ImageAdjustment />} />
      <Route path="/huffman-tree/" element={<HuffmanTree />} />
      <Route path="/razoo-dictionary/" element={<RazooDictionary />} />

      <Route path="*" element={<ImageAdjustment />} />
    </Routes>
  );
};

export default Root;
