import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme as baseTheme } from './theme';
import { ReactNode } from 'react';
import { useAccessibility } from '../contexts/AccessibilityContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { fontSize, isHighContrast } = useAccessibility();

  const theme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      ...(isHighContrast && {
        primary: '#000000',
        text: '#000000',
        background: '#FFFFFF',
        border: '#000000',
        textLight: '#333333'
      })
    },
    typography: {
      ...baseTheme.typography,
      fontSize: {
        sm: `${0.875 * fontSize}rem`,
        base: `${1 * fontSize}rem`,
        lg: `${1.25 * fontSize}rem`,
        xlarge: `${1.5 * fontSize}rem`,
        xxlarge: `${2 * fontSize}rem`
      }
    }
  };

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};