import React, { useState } from "react";
import {
  Box,
  Slider,
  Chip,
  Container,
  Stack,
} from '@mui/material';

const IceCreamMan = () => {
  const [positions, setPositions] = useState([25, 75]);

  return (
    <Container sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Stack sx={{ position: 'absolute', height: '80vh', width: '100%' }} alignItems='center' justifyContent='center'>
        <Box sx={{
          backgroundColor: '#82e3ff',
          height: `${100 - (positions[0] + positions[1]) / 2}%`,
          width: '100%'
        }} />
        <Box sx={{
          borderTop: '4px dotted',
          backgroundColor: '#ff6060',
          height: `${(positions[0] + positions[1]) / 2}%`,
          width: '100%'
        }} />
      </Stack>
      <Stack sx={{ position: 'absolute', height: '80vh' }} alignItems='center' justifyContent='center'>
        <Slider
          track={false}
          value={positions}
          onChange={(e) => setPositions((e.target as any).value)}
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: 'slider-vertical',
            },
            '& :nth-child(3)': {
              color: 'red',
            },
            '& :nth-child(4)': {
              color: 'blue',
            },
          }}
          orientation="vertical"
        />
      </Stack>

      <Stack direction='row' sx={{ position: 'absolute', top: 10 }} spacing={2}>
        <Chip sx={{ borderColor: 'red' }} label={`${(positions[0] + positions[1]) / 2}%`} variant='outlined' />
        <Chip sx={{ borderColor: 'blue' }} label={`${100 - (positions[0] + positions[1]) / 2}%`} variant='outlined' />
      </Stack>
    </Container>
  );
}

export default IceCreamMan;