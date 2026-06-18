/**
 * Single source of truth for Aethon Labs' verifiable company facts.
 * Sourced from the UK Companies House public register (verified).
 * Update here and every page (About, Footer, Privacy, Terms) stays consistent.
 */

export interface CompanyInfo {
  readonly legalName: string;
  readonly tradingName: string;
  readonly companyNumber: string;
  readonly companyType: string;
  readonly status: string;
  readonly incorporatedOn: string; // ISO 8601
  readonly incorporatedLabel: string; // human-friendly
  readonly establishedYear: number;
  readonly sicCode: string;
  readonly sicDescription: string;
  readonly director: string;
  readonly registeredOffice: ReadonlyArray<string>;
  readonly registeredOfficeOneLine: string;
  readonly jurisdiction: string;
  readonly email: string;
  readonly domain: string;
  readonly url: string;
  readonly companiesHouseUrl: string;
}

export const COMPANY: CompanyInfo = {
  legalName: 'Aethon Labs Limited',
  tradingName: 'Aethon Labs',
  companyNumber: '17154015',
  companyType: 'Private limited company',
  status: 'Active',
  incorporatedOn: '2026-04-13',
  incorporatedLabel: '13 April 2026',
  establishedYear: 2026,
  sicCode: '62012',
  sicDescription: 'Business and domestic software development',
  director: 'Aderonke Olamide Adesiyan',
  registeredOffice: ['9 Rudgard Road', 'Longport', 'Coventry', 'England', 'CV6 6PN'],
  registeredOfficeOneLine: '9 Rudgard Road, Longport, Coventry, England, CV6 6PN',
  jurisdiction: 'England & Wales',
  email: 'admin@aethon-labs.com',
  domain: 'aethon-labs.com',
  url: 'https://aethon-labs.com',
  companiesHouseUrl:
    'https://find-and-update.company-information.service.gov.uk/company/17154015',
} as const;

export interface Product {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly status: 'In development' | 'Live' | 'Coming soon';
  readonly statusDetail: string;
  readonly domain: string;
  readonly tags: ReadonlyArray<string>;
}

export const PRODUCTS: ReadonlyArray<Product> = [
  {
    name: 'Clinvara',
    tagline: 'Healthcare-grade software, built to standard.',
    description:
      'Our first product — a modern clinical platform engineered around interoperability and patient safety. Built on FHIR R4, accessible by design, and secured for the realities of handling sensitive health data.',
    status: 'Live',
    statusDetail: 'Available now',
    domain: 'clinvara.com',
    tags: ['FHIR R4', 'WCAG 2.2 AA', 'UK GDPR'],
  },
];
