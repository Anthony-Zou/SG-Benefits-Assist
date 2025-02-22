import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const BenefitCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const BenefitTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
`;

const BenefitDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const BenefitDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
`;

const BenefitDetail = styled.li`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;

  &:before {
    content: '•';
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
`;

const CheckEligibilityButton = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const benefits = [
  {
    id: 1,
    title: 'GST Voucher',
    description: 'Cash assistance to help lower-income Singaporeans with their household expenses.',
    details: [
      'Up to $500 cash payment per year',
      'Additional U-Save rebates for HDB households',
      'Permanent GST Voucher scheme'
    ]
  },
  {
    id: 2,
    title: 'Silver Support Scheme',
    description: 'Quarterly cash supplements to support elderly Singaporeans who had low incomes during their working years.',
    details: [
      'Quarterly payouts of $180 to $900',
      'Automatic qualification for eligible seniors',
      'No application required'
    ]
  },
  {
    id: 3,
    title: 'ComCare Assistance',
    description: 'Financial assistance for low-income individuals and families in need of support.',
    details: [
      'Short to medium-term financial assistance',
      'Coverage for daily living expenses',
      'Additional support for medical needs'
    ]
  },
  {
    id: 4,
    title: 'MediSave',
    description: 'National medical savings scheme to help Singaporeans save for their healthcare needs.',
    details: [
      'Can be used for hospitalization expenses',
      'Covers approved outpatient treatments',
      'Helps pay for MediShield Life premiums'
    ]
  }
];

export const Benefits = () => {
  return (
    <PageContainer>
      <Title>Available Benefits</Title>
      <BenefitsGrid>
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id}>
            <BenefitTitle>{benefit.title}</BenefitTitle>
            <BenefitDescription>{benefit.description}</BenefitDescription>
            <BenefitDetails>
              {benefit.details.map((detail, index) => (
                <BenefitDetail key={index}>{detail}</BenefitDetail>
              ))}
            </BenefitDetails>
            <CheckEligibilityButton to="/eligibility">
              Check Eligibility
            </CheckEligibilityButton>
          </BenefitCard>
        ))}
      </BenefitsGrid>
    </PageContainer>
  );
};