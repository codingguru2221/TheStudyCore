import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getDesignTokens } from './theme.js';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router';
import ScrollToTop from './ScrollToTop.jsx';
import { ToastContainer } from 'react-toastify';

const Main = () => {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          '--primary-color': theme.palette.primary.main,
          '--secondary-color': theme.palette.secondary.main,
        }}
      >

        <App toggleMode={() => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))} mode={mode} />
        <ToastContainer />

      </div>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Main />
  </BrowserRouter>

);
