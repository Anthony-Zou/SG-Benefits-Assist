import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const FeatureCard = styled(Link)`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.5;
`;

const features = [
  {
    icon: '📋',
    title: 'View Benefits',
    description: 'Explore available government benefits and support schemes.',
    link: '/benefits'
  },
  {
    icon: '✓',
    title: 'Check Eligibility',
    description: 'Find out which benefits you qualify for based on your situation.',
    link: '/eligibility'
  },
  {
    icon: '📞',
    title: 'Get Help',
    description: 'Connect with support services and get assistance when needed.',
    link: '/contact'
  }
];

export const Home = () => {
  return (
    <div>
      <HeroSection>
        <Title>Welcome to SG Benefits Assist</Title>
        <Subtitle>
          Your one-stop platform to discover, understand, and access Singapore government benefits
          and support schemes. We're here to help you navigate the available assistance programs.
        </Subtitle>
      </HeroSection>

      <FeaturesGrid>
        {features.map((feature) => (
          <FeatureCard to={feature.link} key={feature.link}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </div>
  );
};