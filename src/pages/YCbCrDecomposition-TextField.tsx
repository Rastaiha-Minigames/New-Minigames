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
  const [colorValues, setColorValues] = useState({ y: 4, cb: 4, cr: 4 });
  const [imagesSrc, setImagesSrc] = useState({ Y: '', Cb: '', Cr: '', Merge: '' });
  const [disabled, setDisabled] = useState(false);


  const submit = async () => {
    if (colorValues.y > 8 || colorValues.y < 0 || colorValues.cb > 8 || colorValues.cb < 0 || colorValues.cr > 8 || colorValues.cr < 0) {
      return;
    }
    setDisabled(true);
    await fetch(baseURL + '/source_coding/YCbCr/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        r: 2 ** colorValues.y / 256,
        g: 2 ** colorValues.cb / 256,
        b: 2 ** colorValues.cr / 256,
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
              <img alt='' src={imagesSrc.Y} width={100} />
              <TextField
                size='small'
                value={colorValues.y}
                onChange={e => {
                  setColorValues({
                    ...colorValues,
                    y: (e.target as any).value,
                  });
                }} />
            </Stack>
            <Stack alignItems='center' spacing={1}>
              <img alt='' src={imagesSrc.Cb} width={100} />
              <TextField
                size='small'
                value={colorValues.cb}
                onChange={e => {
                  setColorValues({
                    ...colorValues,
                    cb: (e.target as any).value,
                  });
                }} />
            </Stack>
            <Stack alignItems='center' spacing={1}>
              <img alt='' src={imagesSrc.Cr} width={100} />
              <TextField
                size='small'
                value={colorValues.cr}
                onChange={e => {
                  setColorValues({
                    ...colorValues,
                    cr: (e.target as any).value,
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
