import styled from 'styled-components';

const PageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ContactCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const ContactInfo = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ContactLabel = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ContactValue = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  margin: 0;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const contacts = [
  {
    id: 1,
    title: 'ComCare Call',
    phone: '1800 222 0000',
    email: 'msf_comcare@msf.gov.sg',
    hours: 'Mon-Sun: 7am-12am'
  },
  {
    id: 2,
    title: 'Silver Support Hotline',
    phone: '1800 222 6622',
    email: 'member@cpf.gov.sg',
    hours: 'Mon-Fri: 8am-5.30pm'
  },
  {
    id: 3,
    title: 'GST Voucher Hotline',
    phone: '1800 222 2888',
    email: 'gstvoucher@cpf.gov.sg',
    hours: 'Mon-Fri: 8am-5pm'
  }
];

export const Contact = () => {
  return (
    <PageContainer>
      <Title>Contact Directory</Title>
      <ContactGrid>
        {contacts.map((contact) => (
          <ContactCard key={contact.id}>
            <ContactTitle>{contact.title}</ContactTitle>
            <ContactInfo>
              <ContactLabel>Phone</ContactLabel>
              <ContactValue>
                <ContactLink href={`tel:${contact.phone}`}>{contact.phone}</ContactLink>
              </ContactValue>
            </ContactInfo>
            <ContactInfo>
              <ContactLabel>Email</ContactLabel>
              <ContactValue>
                <ContactLink href={`mailto:${contact.email}`}>{contact.email}</ContactLink>
              </ContactValue>
            </ContactInfo>
            <ContactInfo>
              <ContactLabel>Operating Hours</ContactLabel>
              <ContactValue>{contact.hours}</ContactValue>
            </ContactInfo>
          </ContactCard>
        ))}
      </ContactGrid>
    </PageContainer>
  );
};