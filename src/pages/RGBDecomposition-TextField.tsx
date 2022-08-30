import React, { useEffect, useState } from "react";
import {
  Slider,
  Chip,
  Container,
  Stack,
  Button,
  CircularProgress,
  TextField,
} from '@mui/material';
import { baseURL } from "../configs/network/consts";
const RGBDecomposition = () => {
  const [colorValues, setColorValues] = useState({ r: 4, g: 4, b: 4 });
  const [imagesSrc, setImagesSrc] = useState({ R: '', G: '', B: '', Merge: '' });
  const [disabled, setDisabled] = useState(false);

  const submit = async () => {
    if (colorValues.r > 8 || colorValues.r < 0 || colorValues.g > 8 || colorValues.g < 0 || colorValues.b > 8 || colorValues.b < 0) {
      return;
    }
    setDisabled(true);
    await fetch(baseURL + '/source_coding/RGB/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        r: 2 ** colorValues.r / 256,
        g: 2 ** colorValues.g / 256,
        b: 2 ** colorValues.b / 256,
      })
    }).then((res) => res.json())
      .then((res) => {
        setImagesSrc(res);
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
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Stack direction='row' alignItems='center' justifyContent='space-evenly'>
          <Stack spacing={1}>
            <Stack alignItems='center' spacing={1}>
              <img alt='' src={imagesSrc.R} width={100} />
              <TextField
                size="small"
                value={colorValues.r}
                onChange={e => {
                  setColorValues({
                    ...colorValues,
                    r: (e.target as any).value,
                  });
                }}
              />
            </Stack>
            <Stack spacing={1} alignItems='center'>
              <img alt='' src={imagesSrc.G} width={100} />
              <TextField
                size="small"
                value={colorValues.g}
                onChange={e => {
                  setColorValues({
                    ...colorValues,
                    g: (e.target as any).value,
                  });
                }} />
            </Stack>
            <Stack spacing={1} alignItems='center'>
              <img alt='' src={imagesSrc.B} width={100} />
              <TextField
                size="small"
                value={colorValues.b}
                onChange={e => {
                  setColorValues({
                    ...colorValues,
                    b: (e.target as any).value,
                  });
                }} />
            </Stack>
          </Stack>
          <Stack alignItems='center' spacing={1}>
            <Stack>
              <img alt='' src='cat.jpg' width={100} />
            </Stack>
            <Stack>
              <img alt='' src='down-arrow.png' width={50} />
            </Stack>
            <Stack>
              <img alt='' src={imagesSrc.Merge} width={100} />
            </Stack>
          </Stack>
        </Stack>
        <Button disabled={disabled} variant="contained" onClick={submit}>
          {disabled ?
            <CircularProgress /> :
            'اعمال'
          }
        </Button>
      </Stack>
    </Container>
  );
}

export default RGBDecomposition;
