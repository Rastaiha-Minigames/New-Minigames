import React from 'react';
import { Route, Routes } from 'react-router-dom';

import RGBDecompositionSlider from '../pages/RGBDecomposition-Slider';
import RGBDecompositionTextField from '../pages/RGBDecomposition-TextField';
import YCbCrDecompositionSlider from '../pages/YCbCrDecomposition-Slider';
import YCbCrDecompositionTextField from '../pages/YCbCrDecomposition-TextField';
import RGBRes from '../pages/RGBResulotion';
import YCbCrRes from '../pages/YCbCrResulotion';
import RazooDictionary from '../pages/RazooDictionary';
import IceCreamMan from '../pages/IceCreamMan';

const Root = () => {
  return (
    <Routes>
      <Route path="/rgb-decomposition-slider/" element={<RGBDecompositionSlider />} />
      <Route path="/rgb-decomposition-textfield/" element={<RGBDecompositionTextField />} />
      <Route path="/ycbcr-decomposition-slider/" element={<YCbCrDecompositionSlider />} />
      <Route path="/ycbcr-decomposition-textfield/" element={<YCbCrDecompositionTextField />} />
      <Route path="/rgb-change-resolution/" element={<RGBRes />} />
      <Route path="/ycbcr-change-resolution/" element={<YCbCrRes />} />
      <Route path="/ice-cream-man/" element={<IceCreamMan />} />
      <Route path="/razoo-dictionary/" element={<RazooDictionary />} />

      <Route path="*" element={<IceCreamMan />} />
    </Routes>
  );
};

export default Root;
