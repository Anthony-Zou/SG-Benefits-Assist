import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AccessibilityContextType {
  fontSize: number;
  isHighContrast: boolean;
  isScreenReader: boolean;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  toggleHighContrast: () => void;
  toggleScreenReader: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider = ({ children }: AccessibilityProviderProps) => {
  const [fontSize, setFontSize] = useState(1);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isScreenReader, setIsScreenReader] = useState(false);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 0.1, 1.5));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 0.1, 0.8));
  };

  const toggleHighContrast = () => {
    setIsHighContrast(prev => !prev);
  };

  const toggleScreenReader = () => {
    setIsScreenReader(prev => !prev);
  };

  const value = {
    fontSize,
    isHighContrast,
    isScreenReader,
    increaseFontSize,
    decreaseFontSize,
    toggleHighContrast,
    toggleScreenReader
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};