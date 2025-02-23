import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.xlarge};
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Header = () => {
  const { translations } = useLanguage();

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">{translations.common.appName}</Logo>
        <NavLinks>
          <NavLink to="/benefits">{translations.nav.benefits}</NavLink>
          <NavLink to="/eligibility">{translations.nav.eligibility}</NavLink>
          <NavLink to="/contact">{translations.nav.contact}</NavLink>
          <NavLink to="/faq">{translations.nav.faq}</NavLink>
          <LanguageSelector />
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};