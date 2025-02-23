import styled from 'styled-components';
import { useState } from 'react';
import { benefits } from '../data/benefits';

const PageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const StatusCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StatusHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const StatusTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const StatusBadge = styled.span<{ status: 'pending' | 'approved' | 'rejected' }>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  background: ${({ status, theme }) =>
    status === 'approved'
      ? theme.colors.success
      : status === 'rejected'
      ? theme.colors.error
      : theme.colors.warning};
  color: ${({ theme }) => theme.colors.white};
`;

const Timeline = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const TimelineItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;

  &:not(:last-child):before {
    content: '';
    position: absolute;
    left: 0.5rem;
    top: 1.5rem;
    bottom: -0.75rem;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const TimelineDot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 0.25rem;
`;

const TimelineContent = styled.div`
  flex: 1;
`;

const TimelineDate = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const TimelineTitle = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const TimelineDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
`;

interface Application {
  id: string;
  benefitId: string;
  status: 'pending' | 'approved' | 'rejected';
  timeline: {
    date: string;
    title: string;
    description: string;
  }[];
}

const mockApplications: Application[] = [
  {
    id: '1',
    benefitId: 'comcare',
    status: 'pending',
    timeline: [
      {
        date: '2024-01-15',
        title: 'Application Submitted',
        description: 'Your application has been received and is being processed.'
      },
      {
        date: '2024-01-16',
        title: 'Document Review',
        description: 'Your documents are being reviewed by our team.'
      }
    ]
  },
  {
    id: '2',
    benefitId: 'gst-voucher',
    status: 'approved',
    timeline: [
      {
        date: '2024-01-10',
        title: 'Application Submitted',
        description: 'Your application has been received.'
      },
      {
        date: '2024-01-12',
        title: 'Application Approved',
        description: 'Your GST Voucher application has been approved.'
      }
    ]
  }
];

export const Dashboard = () => {
  const [applications] = useState<Application[]>(mockApplications);

  return (
    <PageContainer>
      <Title>My Applications</Title>
      <DashboardGrid>
        {applications.map((application) => {
          const benefit = benefits.find(b => b.id === application.benefitId);
          if (!benefit) return null;

          return (
            <StatusCard key={application.id}>
              <StatusHeader>
                <StatusTitle>{benefit.name}</StatusTitle>
                <StatusBadge status={application.status}>
                  {application.status.charAt(0).toUpperCase() + 
                   application.status.slice(1)}
                </StatusBadge>
              </StatusHeader>
              <Timeline>
                {application.timeline.map((event, index) => (
                  <TimelineItem key={index}>
                    <TimelineDot />
                    <TimelineContent>
                      <TimelineDate>{event.date}</TimelineDate>
                      <TimelineTitle>{event.title}</TimelineTitle>
                      <TimelineDescription>
                        {event.description}
                      </TimelineDescription>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </StatusCard>
          );
        })}
      </DashboardGrid>
    </PageContainer>
  );
};