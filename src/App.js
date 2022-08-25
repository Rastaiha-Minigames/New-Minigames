import './configs/styles/App.css';

import Root from './routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import createEmotionCache from './configs/createEmotionCache'
import { CacheProvider } from "@emotion/react";
import selectTheme from './configs/themes';

function App() {
  document.dir = 'rtl';
  return (
    <CacheProvider value={createEmotionCache('rtl')}>
      <ThemeProvider theme={selectTheme('rtl')}>
        <CssBaseline />
        <Root />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
