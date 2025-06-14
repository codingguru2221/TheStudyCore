// theme.js
import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: { main: '#1976d2' },
        secondary: { main: '#ff4081' },
        background: { default: '#FAFAFA', paper: '#ffffff' },
        text: { primary: '#000000', secondary: '#555555' },
        imgBtn: { primary: '#ffffff' },
        footerBgColor: { default: '#ffffff', paper: '#000000' },
        navbarColor: { primary: '#ffffff', secondary: '#aaaaaa' },
        cardBgColor: { primary: '#F9FAFE', secondary: '#aaaaaa' },
        cardBtn: { primary: '#1E2A44', secondary: '#555555' },
        cardBtn2: { primary: '#4469F5', secondary: '#555555' },
        cardBtnColor: { default: '#ffffff', paper: '#000000' },
        profilebg: { default: '#F9FAFC', paper: '#000000' },
        dashboardBg: { default: '#3241B8' }

      }
      : {
        primary: { main: '#90caf9' },
        secondary: { main: '#f48fb1' },
        background: { default: '#121212', paper: '#1e1e1e' },
        text: { primary: '#ffffff', secondary: '#aaaaaa' },
        imgBtn: { primary: '#ffffff' },
        footerBgColor: { default: '#FAFAFA2', paper: '#1e1e1e' },
        navbarColor: { primary: '#ffffff', secondary: '#aaaaaa' },
        cardBtn: { primary: '#ffffff', secondary: '#aaaaaa' },
        cardBtn2: { primary: '#4469F5', secondary: '#555555' },
        cardBtnColor: { default: '#ffffff', paper: '#000000' },
        profilebg: { default: '#121212', paper: '#000000' },
        dashboardBg: { default: '#373737' }


      }),
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
