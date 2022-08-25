import React, { useState } from "react";
import {
  Button,
  Tooltip,
  Container,
  Typography,
  TextField,
  Paper,
} from '@mui/material';
import { Stack } from "@mui/system";

const RazooDictionary = () => {
  const [dictionary, setDictionary] = useState<string[]>([]);
  const [text, setText] = useState<string>('');
  const [word, setWord] = useState<string>(null);
  const [hoveredWord, setHoveredWord] = useState<string>(null);

  let shownText = text;
  for (let i = 0; i < dictionary.length; i++) {
    const item = dictionary[i];
    shownText = shownText.replaceAll(item, (i + 1).toString());
  }

  console.log(text.split('\n'))

  const getWordRepeatNumber = (searchedWord) => {
    let count = 0;
    const words = shownText.split(/\s+/);
    for (const word of words) {
      if (searchedWord == word) {
        count += 1;
      }
    }
    return count;
  }

  const successRate = 1;

  const addWordToDictionary = () => {
    if (!dictionary.includes(word) && word) {
      setDictionary([...dictionary, word]);
      setWord(null);
    }
  }
  text.split('\n')

  return (
    <Container>
      <Stack alignItems='stretch' direction='row'>
        <Paper sx={{ width: '100%', margin: 1, padding: 1 }}>
          <Stack spacing={2}>
            {/* <Chip variant='outlined' label={successRate} /> */}
            <TextField
              variant='outlined'
              multiline
              placeholder="لطفاً متن خود را وارد کنید"
              rows={5}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Stack direction='row' spacing={0.5}>
              <Stack>
                {shownText.split('\n').map((paragraph) => (
                  <Typography>
                    {paragraph.split(/\s+/).map((word) => (
                      <Tooltip arrow title={`تعداد تکرار این کلمه در متن: ${getWordRepeatNumber(word)}`}>
                        <span
                          onMouseEnter={() => setHoveredWord(word)}
                          onMouseLeave={() => setHoveredWord(null)}
                          style={{ fontWeight: word === hoveredWord ? 'bold' : null }}>
                          {word}
                        </span>
                      </Tooltip>
                    ))}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Paper>
        <Paper sx={{ width: '200px', margin: 1, padding: 1 }}>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <TextField
                onChange={(e) => setWord(e.target.value)}
                value={word}
                placeholder='کلمه جدید'
              />
              <Button variant='outlined'
                onClick={addWordToDictionary}>
                {'افزودن'}
              </Button>
            </Stack>
            <ol>
              {dictionary.map((word) => (
                <Typography>
                  <li>
                    {word}
                  </li>
                </Typography>
              ))}
            </ol>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}

export default RazooDictionary;