import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7b2cbf', // Violet - couleur principale de la députation
      light: '#9d4edd',
      dark: '#5a189a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2e7d32', // Vert - couleur secondaire de la députation
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    info: {
      main: '#7b2cbf',
      light: '#9d4edd',
      dark: '#5a189a',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '1.875rem',
        lineHeight: 1.3,
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.625rem',
        lineHeight: 1.4,
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
        lineHeight: 1.4,
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.375rem',
      },
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.75rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.125rem',
      },
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.75,
      '@media (max-width:600px)': {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      '@media (max-width:600px)': {
        fontSize: '0.9375rem',
        lineHeight: 1.5,
      },
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '0.9375rem',
      },
    },
  },
  components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: 'none',
              borderRadius: 12,
              padding: '14px 36px',
              fontWeight: 700,
              fontSize: '1.0625rem',
              boxShadow: '0 6px 20px 0 rgba(123, 44, 191, 0.35)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                boxShadow: '0 10px 32px 0 rgba(123, 44, 191, 0.5)',
                transform: 'translateY(-2px)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            },
          },
        },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(123, 44, 191, 0.15)',
        },
      },
    },
  },
});

export default theme;

