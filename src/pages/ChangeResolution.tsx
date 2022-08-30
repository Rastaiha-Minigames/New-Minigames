import React, { useEffect, useState } from "react";
import {
  Slider,
  Chip,
  Container,
  Stack,
  Button,
  TextField,
  CircularProgress,
} from '@mui/material';
import { baseURL } from "../configs/network/consts";
const ChangeResolution = () => {
  const [resolution, setResolution] = useState("0.5");
  const [imageSrc, setImagesSrc] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const submit = async () => {
    const floatResolution = parseFloat(resolution);
    if (floatResolution <= 0 || floatResolution > 1) {
      return;
    }
    setDisabled(true);
    await fetch(baseURL + '/source_coding/downsample/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ factor: floatResolution })
    }).then((res) => res.json())
      .then((res) => {
        setImagesSrc(res.image);
        setDisabled(false);
      })
      .catch(() => {
        setDisabled(false);
      })
  }

  useEffect(() => {
    submit();
  }, [])

  return (
    <Container sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Stack sx={{ width: '100%' }} alignItems='center' spacing={2}>
        <Stack direction='row' alignItems='center' spacing={1}>
          <img alt='' src={imageSrc} width={100} />
          <img alt='' src='right-arrow.png' width={50} />
          <img alt='' src='cat.jpg' width={100} />
        </Stack>
        <TextField
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
        />
        <Button fullWidth disabled={disabled} variant="contained" onClick={submit}>
          {disabled ?
            <CircularProgress /> :
            'اعمال'
          }
        </Button>
      </Stack>
    </Container>
  );
}

export default ChangeResolution;
