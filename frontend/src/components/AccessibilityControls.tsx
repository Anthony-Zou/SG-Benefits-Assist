import styled from 'styled-components';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useLanguage } from '../contexts/LanguageContext';

const AccessibilityContainer = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`;

const AccessibilityButton = styled.button<{ isActive?: boolean }>`
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.background};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const AccessibilityControls = () => {
  const {
    fontSize,
    isHighContrast,
    isScreenReader,
    increaseFontSize,
    decreaseFontSize,
    toggleHighContrast,
    toggleScreenReader
  } = useAccessibility();

  const { translations } = useLanguage();

  return (
    <AccessibilityContainer>
      <ButtonGroup>
        <AccessibilityButton onClick={increaseFontSize}>
          {translations.accessibility.increaseFontSize} (A+)
        </AccessibilityButton>
        <AccessibilityButton onClick={decreaseFontSize}>
          {translations.accessibility.decreaseFontSize} (A-)
        </AccessibilityButton>
        <AccessibilityButton
          isActive={isHighContrast}
          onClick={toggleHighContrast}
        >
          {translations.accessibility.highContrast}
        </AccessibilityButton>
        <AccessibilityButton
          isActive={isScreenReader}
          onClick={toggleScreenReader}
        >
          {translations.accessibility.screenReader}
        </AccessibilityButton>
      </ButtonGroup>
    </AccessibilityContainer>
  );
};