import React, { useEffect, useState } from "react";
import {
  Slider,
  Chip,
  Container,
  Stack,
  Button,
  CircularProgress,
} from '@mui/material';
import { baseURL } from "../configs/network/consts";
const RGBDecomposition = () => {
  const [colorValues, setColorValues] = useState({ r: 0.50, g: 0.50, b: 0.5 });
  const [imagesSrc, setImagesSrc] = useState({ R: '', G: '', B: '', Merge: '' });
  const [disabled, setDisabled] = useState(false);


  const submit = async () => {
    setDisabled(true);
    await fetch(baseURL + '/source_coding/RGB/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(colorValues)
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

  console.log(colorValues)

  return (
    <Container sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Stack sx={{ width: '100%' }} >
        <Stack direction='row' alignItems='center' justifyContent='space-evenly'>
          <Stack>
            <Stack>
              <img alt='' src={imagesSrc.R} width={100} />
              <Slider
                value={colorValues.r * 100}
                onChange={e => {
                  setColorValues({
                    ...colorValues,
                    r: (e.target as any).value / 100,
                  });
                }} />
            </Stack>
            <Stack>
              <img alt='' src={imagesSrc.G} width={100} />
              <Slider
                value={colorValues.g * 100}
                onChange={e => {
                  setColorValues({
                    ...colorValues,
                    g: (e.target as any).value / 100,
                  });
                }} />
            </Stack>
            <Stack>
              <img alt='' src={imagesSrc.B} width={100} />
              <Slider
                value={colorValues.b * 100}
                onChange={e => {
                  setColorValues({
                    ...colorValues,
                    b: (e.target as any).value / 100,
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
