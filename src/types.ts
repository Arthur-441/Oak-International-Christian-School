export type PageId = 'home' | 'about' | 'academics' | 'activities' | 'gallery' | 'contact';

export interface GradeLevel {
  id: string;
  name: string;
  ageRange: string;
  badge: string;
  description: string;
  highlights: string[];
  milestone: string;
}

export interface Activity {
  id: string;
  title: string;
  category: 'Sports' | 'Life Skills' | 'Creative Arts' | 'Performing Arts';
  description: string;
  benefits: string;
  scheduleNote?: string;
  iconType: 'swim' | 'cook' | 'craft' | 'dance' | 'music' | 'table-tennis' | 'volleyball' | 'football';
}

export interface DisciplineShowcase {
  id: string;
  title: string;
  category: 'Academics' | 'Character' | 'Leadership' | 'Activities' | 'Life Skills';
  description: string;
  scripturalPrinciple: string;
  outcomes: string[];
}

export interface QuoteItem {
  quote: string;
  author?: string;
  context?: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  question: string;
  communicationModes: ('Phone Call' | 'WhatsApp' | 'Email')[];
}

export interface CurriculumPartner {
  name: string;
  short: string;
  motto: string;
  description: string;
  logo: string;
}

