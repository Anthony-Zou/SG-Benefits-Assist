import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Benefits } from './pages/Benefits';
import { Eligibility } from './pages/Eligibility';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { FAQ } from './pages/FAQ';
import { LanguageProvider } from './contexts/LanguageContext';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import { AccessibilityControls } from './components/AccessibilityControls';
import { ErrorBoundary } from './components/ErrorBoundary';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const MainContent = styled.main`
  flex: 1;
  width: 100vw;
  max-width: 100vw;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  
  > div {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <AccessibilityProvider>
          <Router>
            <AppContainer>
              <Header />
              <MainContent>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/benefits" element={<Benefits />} />
                  <Route path="/eligibility" element={<Eligibility />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </MainContent>
              <AccessibilityControls />
            </AppContainer>
          </Router>
        </AccessibilityProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
