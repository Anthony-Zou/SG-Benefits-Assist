import styled from 'styled-components';
import { useState } from 'react';
import { benefits } from '../data/benefits';

const PageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Form = styled.form`
  max-width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.base};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.base};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const ResultContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BenefitCard = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};

  h4 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text};
  }

  ul {
    margin-left: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Eligibility = () => {
  const [showResult, setShowResult] = useState(false);

  const [formData, setFormData] = useState({
    age: '',
    monthlyIncome: '',
    citizenship: '',
    housingType: ''
  });

  const [eligibleBenefits, setEligibleBenefits] = useState<typeof benefits>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const checkEligibility = () => {
    const eligibleBenefitIds: string[] = [];
    const age = parseInt(formData.age);
    const income = parseInt(formData.monthlyIncome);

    if (age >= 65 && income <= 2300) {
      eligibleBenefitIds.push('silver-support');
    }

    if (income <= 2200 && formData.citizenship === 'citizen') {
      eligibleBenefitIds.push('comcare');
    }

    if (formData.citizenship === 'citizen' && 
        (income <= 3100 || 
        (formData.housingType === 'hdb' && income <= 4000))) {
      eligibleBenefitIds.push('gst-voucher');
    }

    const foundBenefits = benefits.filter(benefit => 
      eligibleBenefitIds.includes(benefit.id)
    );
    setEligibleBenefits(foundBenefits);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checkEligibility();
    setShowResult(true);
  };

  return (
    <PageContainer>
      <Title>Check Your Eligibility</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Age</Label>
          <Input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="0"
            max="120"
          />
        </FormGroup>
        <FormGroup>
          <Label>Monthly Income (SGD)</Label>
          <Input
            type="number"
            name="monthlyIncome"
            value={formData.monthlyIncome}
            onChange={handleChange}
            required
            min="0"
          />
        </FormGroup>
        <FormGroup>
          <Label>Citizenship Status</Label>
          <Select
            name="citizenship"
            value={formData.citizenship}
            onChange={handleChange}
            required
          >
            <option value="">Select status</option>
            <option value="citizen">Singaporean Citizen</option>
            <option value="pr">Permanent Resident</option>
            <option value="foreigner">Foreigner</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Housing Type</Label>
          <Select
            name="housingType"
            value={formData.housingType}
            onChange={handleChange}
            required
          >
            <option value="">Select housing type</option>
            <option value="hdb">HDB</option>
            <option value="private">Private Property</option>
            <option value="rental">Rental</option>
          </Select>
        </FormGroup>
        <Button type="submit">Check Eligibility</Button>
      </Form>
      {showResult && (
        <ResultContainer>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>
            {eligibleBenefits.length > 0 ? 'You may be eligible for:' : 'Eligibility Results'}
          </h3>
          {eligibleBenefits.length > 0 ? (
            eligibleBenefits.map((benefit) => (
              <BenefitCard key={benefit.id}>
                <h4>{benefit.name}</h4>
                <p>{benefit.description}</p>
                <h5 style={{ marginTop: '0.5rem', color: '#555' }}>Eligibility Criteria:</h5>
                <ul>
                  {benefit.eligibilityCriteria.map((criteria, index) => (
                    <li key={index}>{criteria}</li>
                  ))}
                </ul>
                <p><strong>How to Apply:</strong> {benefit.applicationProcess}</p>
                {benefit.requiredDocuments.length > 0 && (
                  <>
                    <h5 style={{ marginTop: '0.5rem', color: '#555' }}>Required Documents:</h5>
                    <ul>
                      {benefit.requiredDocuments.map((doc, index) => (
                        <li key={index}>{doc}</li>
                      ))}
                    </ul>
                  </>
                )}
                <p>
                  <a href={benefit.moreInfoUrl} target="_blank" rel="noopener noreferrer">
                    Learn more about {benefit.name}
                  </a>
                </p>
              </BenefitCard>
            ))
          ) : (
            <p style={{ color: '#666', textAlign: 'center', padding: '1rem' }}>
              Based on the provided information, you may not be eligible for any benefits at this time.
              Please ensure all information is accurate or contact your nearest Social Service Office for assistance.
            </p>
          )}
        </ResultContainer>
      )}
    </PageContainer>
  );
};