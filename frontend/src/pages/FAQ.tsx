import styled from 'styled-components';
import { useState } from 'react';

const PageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SearchContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FAQSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FAQCategory = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CategoryTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const FAQItem = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Question = styled.button<{ isOpen: boolean }>`
  width: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ isOpen, theme }) =>
    isOpen ? theme.colors.primary : theme.colors.white};
  color: ${({ isOpen, theme }) =>
    isOpen ? theme.colors.white : theme.colors.text};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    background: ${({ isOpen, theme }) =>
      isOpen ? theme.colors.primaryDark : theme.colors.background};
  }
`;

const Answer = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen, theme }) =>
    isOpen ? theme.spacing.md : '0 ' + theme.spacing.md};
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all 0.3s ease-in-out;
`;

interface FAQItemType {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItemType[] = [
  {
    id: 1,
    category: 'General',
    question: 'What is SG Benefits Assist?',
    answer: 'SG Benefits Assist is a platform designed to help Singapore residents discover and access various government benefits and support schemes they may be eligible for.'
  },
  {
    id: 2,
    category: 'General',
    question: 'How do I know if I\'m eligible for benefits?',
    answer: 'You can use our Eligibility Checker tool to input your information and see which benefits you may qualify for. The tool considers factors like age, income, and citizenship status.'
  },
  {
    id: 3,
    category: 'Application',
    question: 'What documents do I need to prepare?',
    answer: 'Required documents vary by benefit scheme but commonly include your NRIC, income documents, and housing-related documents. Each benefit\'s detail page lists specific requirements.'
  },
  {
    id: 4,
    category: 'Application',
    question: 'How long does the application process take?',
    answer: 'Processing times vary by scheme. Some benefits like GST Voucher are automatic, while others like ComCare may take 2-4 weeks for assessment.'
  },
  {
    id: 5,
    category: 'Support',
    question: 'Who can I contact for help?',
    answer: 'You can visit our Contact page to find relevant hotlines and email addresses for each benefit scheme. You can also visit your nearest Social Service Office for in-person assistance.'
  }
];

export const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(
    item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(faqData.map(item => item.category)));

  return (
    <PageContainer>
      <Title>Frequently Asked Questions</Title>
      
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search FAQ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>

      <FAQSection>
        {categories.map(category => {
          const categoryItems = filteredFAQs.filter(
            item => item.category === category
          );

          if (categoryItems.length === 0) return null;

          return (
            <FAQCategory key={category}>
              <CategoryTitle>{category}</CategoryTitle>
              {categoryItems.map(item => (
                <FAQItem key={item.id}>
                  <Question
                    isOpen={openItems.includes(item.id)}
                    onClick={() => toggleItem(item.id)}
                  >
                    {item.question}
                    <span>
                      {openItems.includes(item.id) ? '−' : '+'}
                    </span>
                  </Question>
                  <Answer isOpen={openItems.includes(item.id)}>
                    {item.answer}
                  </Answer>
                </FAQItem>
              ))}
            </FAQCategory>
          );
        })}
      </FAQSection>
    </PageContainer>
  );
};