import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './theme';
import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};