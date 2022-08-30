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
  const [colorValues, setColorValues] = useState({ y: "8", cb: "8", cr: "8" });
  const [imagesSrc, setImagesSrc] = useState({ Y: '', Cb: '', Cr: '', Merge: '' });
  const [disabled, setDisabled] = useState(false);


  const submit = async () => {
    let y = parseInt(colorValues.y);
    let cb = parseInt(colorValues.cb);
    let cr = parseInt(colorValues.cr);
    if (y > 8 || y < 0 || cb > 8 || cb < 0 || cr > 8 || cr < 0) {
      return;
    }
    setDisabled(true);
    await fetch(baseURL + '/source_coding/YCbCr_cutbits/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        y: y,
        cb: cb,
        cr: cr,
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
