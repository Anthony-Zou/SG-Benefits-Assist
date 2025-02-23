import styled from 'styled-components';
import { useState } from 'react';
import { benefits } from '../data/benefits';

const ComparisonContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.xlarge};
`;

const SelectContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
`;

const Select = styled.select`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: start;
`;

const ComparisonHeader = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const ComparisonRow = styled.div`
  display: contents;
  
  > div {
    padding: ${({ theme }) => theme.spacing.sm};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  
  &:last-child > div {
    border-bottom: none;
  }
`;

const ComparisonLabel = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textLight};
`;

const ComparisonValue = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

export const BenefitComparison = () => {
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>(['', '']);

  const handleBenefitSelect = (index: number, benefitId: string) => {
    const newSelectedBenefits = [...selectedBenefits];
    newSelectedBenefits[index] = benefitId;
    setSelectedBenefits(newSelectedBenefits);
  };

  const getBenefitById = (id: string) => {
    return benefits.find(benefit => benefit.id === id);
  };

  const benefit1 = getBenefitById(selectedBenefits[0]);
  const benefit2 = getBenefitById(selectedBenefits[1]);

  return (
    <ComparisonContainer>
      <Title>Compare Benefits</Title>
      <SelectContainer>
        <Select
          value={selectedBenefits[0]}
          onChange={(e) => handleBenefitSelect(0, e.target.value)}
        >
          <option value="">Select first benefit</option>
          {benefits.map((benefit) => (
            <option key={benefit.id} value={benefit.id}>
              {benefit.name}
            </option>
          ))}
        </Select>
        <Select
          value={selectedBenefits[1]}
          onChange={(e) => handleBenefitSelect(1, e.target.value)}
        >
          <option value="">Select second benefit</option>
          {benefits.map((benefit) => (
            <option key={benefit.id} value={benefit.id}>
              {benefit.name}
            </option>
          ))}
        </Select>
      </SelectContainer>

      {benefit1 && benefit2 && (
        <ComparisonGrid>
          <ComparisonHeader>Feature</ComparisonHeader>
          <ComparisonHeader>{benefit1.name}</ComparisonHeader>
          <ComparisonHeader>{benefit2.name}</ComparisonHeader>

          <ComparisonRow>
            <ComparisonLabel>Description</ComparisonLabel>
            <ComparisonValue>{benefit1.description}</ComparisonValue>
            <ComparisonValue>{benefit2.description}</ComparisonValue>
          </ComparisonRow>

          <ComparisonRow>
            <ComparisonLabel>Eligibility</ComparisonLabel>
            <ComparisonValue>
              <ul>
                {benefit1.eligibilityCriteria.map((criteria, index) => (
                  <li key={index}>{criteria}</li>
                ))}
              </ul>
            </ComparisonValue>
            <ComparisonValue>
              <ul>
                {benefit2.eligibilityCriteria.map((criteria, index) => (
                  <li key={index}>{criteria}</li>
                ))}
              </ul>
            </ComparisonValue>
          </ComparisonRow>

          <ComparisonRow>
            <ComparisonLabel>Application Process</ComparisonLabel>
            <ComparisonValue>{benefit1.applicationProcess}</ComparisonValue>
            <ComparisonValue>{benefit2.applicationProcess}</ComparisonValue>
          </ComparisonRow>

          <ComparisonRow>
            <ComparisonLabel>Required Documents</ComparisonLabel>
            <ComparisonValue>
              {benefit1.requiredDocuments.length > 0 ? (
                <ul>
                  {benefit1.requiredDocuments.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              ) : (
                'No documents required'
              )}
            </ComparisonValue>
            <ComparisonValue>
              {benefit2.requiredDocuments.length > 0 ? (
                <ul>
                  {benefit2.requiredDocuments.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              ) : (
                'No documents required'
              )}
            </ComparisonValue>
          </ComparisonRow>
        </ComparisonGrid>
      )}
    </ComparisonContainer>
  );
};