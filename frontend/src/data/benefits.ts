interface Benefit {
  id: string;
  name: string;
  description: string;
  eligibilityCriteria: string[];
  applicationProcess: string;
  requiredDocuments: string[];
  moreInfoUrl: string;
}

export const benefits: Benefit[] = [
  {
    id: 'silver-support',
    name: 'Silver Support Scheme',
    description: 'The Silver Support Scheme provides quarterly cash supplements to seniors who had low incomes during their working years and now have less in their retirement.',
    eligibilityCriteria: [
      'Age 65 years or older',
      'Monthly household income per person not exceeding $2,300',
      'Lifetime wages must be in the bottom 20% of Singapore workers',
      'Must live in a 1- to 5-room HDB flat'
    ],
    applicationProcess: 'No application is required. Eligible seniors will be automatically enrolled.',
    requiredDocuments: [],
    moreInfoUrl: 'https://www.silversupport.gov.sg'
  },
  {
    id: 'comcare',
    name: 'ComCare Assistance',
    description: 'ComCare provides social assistance for low-income individuals and families in need of support.',
    eligibilityCriteria: [
      'Singapore Citizen or Permanent Resident',
      'Monthly household income of $2,200 or less',
      'Experiencing financial difficulties'
    ],
    applicationProcess: 'Apply through your nearest Social Service Office (SSO)',
    requiredDocuments: [
      'NRIC',
      'Income documents',
      'Bank statements',
      'Housing-related documents'
    ],
    moreInfoUrl: 'https://www.msf.gov.sg/comcare'
  },
  {
    id: 'gst-voucher',
    name: 'GST Voucher',
    description: 'The GST Voucher scheme helps lower- and middle-income Singaporeans offset their GST expenses.',
    eligibilityCriteria: [
      'Singapore Citizen',
      'Income not exceeding $3,100 per month',
      'HDB residents with income not exceeding $4,000 per month',
      'Annual Value of home not exceeding $21,000'
    ],
    applicationProcess: 'No application needed. Eligible citizens will receive automatically.',
    requiredDocuments: [],
    moreInfoUrl: 'https://www.gstvoucher.gov.sg'
  }
];