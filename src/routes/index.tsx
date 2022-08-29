import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ImageAdjustment from '../pages/ImageAdjustment';
import RazooDictionary from '../pages/RazooDictionary';
import IceCreamMan from '../pages/IceCreamMan';

const Root = () => {
  return (
    <Routes>
      <Route path="/image-adjustment/" element={<ImageAdjustment />} />
      <Route path="/ice-cream-man/" element={<IceCreamMan />} />
      <Route path="/razoo-dictionary/" element={<RazooDictionary />} />

      <Route path="*" element={<IceCreamMan />} />
    </Routes>
  );
};

export default Root;
