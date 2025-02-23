import styled from 'styled-components';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageButton = styled.button<{ $isActive: boolean }>`
  background: ${({ $isActive, theme }) =>
    $isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: all 0.2s;
  margin-left: ${({ theme }) => theme.spacing.sm};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <LanguageContainer>
      <LanguageButton
        $isActive={language === 'en'}
        onClick={() => setLanguage('en')}
      >
        EN
      </LanguageButton>
      <LanguageButton
        $isActive={language === 'zh'}
        onClick={() => setLanguage('zh')}
      >
        中文
      </LanguageButton>
    </LanguageContainer>
  );
};