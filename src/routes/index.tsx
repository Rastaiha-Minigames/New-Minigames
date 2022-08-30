import React from 'react';
import { Route, Routes } from 'react-router-dom';

import RGBDecomposition from '../pages/RGBDecomposition';
import YCbCrDecomposition from '../pages/YCbCrDecomposition';
import RazooDictionary from '../pages/RazooDictionary';
import IceCreamMan from '../pages/IceCreamMan';

const Root = () => {
  return (
    <Routes>
      <Route path="/rgb-decomposition/" element={<RGBDecomposition />} />
      <Route path="/ycbcr-decomposition/" element={<YCbCrDecomposition />} />
      <Route path="/ice-cream-man/" element={<IceCreamMan />} />
      <Route path="/razoo-dictionary/" element={<RazooDictionary />} />

      <Route path="*" element={<IceCreamMan />} />
    </Routes>
  );
};

export default Root;
