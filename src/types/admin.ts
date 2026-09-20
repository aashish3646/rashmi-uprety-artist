// TypeScript definitions for Admin CMS Data

export type ContentStatus = 'Published' | 'Draft' | 'Archived';
export type InquiryStatus = 'New' | 'Read' | 'Archived';

export interface AdminPageSummary {
  id: string;
  title: string;
  path: string;
  status: ContentStatus;
  lastUpdated: string;
  sectionsCount: number;
}

export interface AdminProject {
  id: string;
  title: string;
  category: 'Film' | 'Short Film' | 'Drama' | 'Commercial';
  role: string;
  year: string;
  description: string;
  featuredImage: string;
  galleryImages: string[];
  externalLink?: string;
  status: ContentStatus;
  lastUpdated: string;
  isMockData: boolean;
}

export interface AdminTheatreProduction {
  id: string;
  production: string;
  character: string;
  director: string;
  company: string;
  venue: string;
  year: string;
  featuredImage: string;
  galleryImages: string[];
  videoUrl?: string;
  description: string;
  status: ContentStatus;
  lastUpdated: string;
  isMockData: boolean;
}

export interface AdminMediaAsset {
  id: string;
  filename: string;
  src: string;
  type: 'image' | 'video';
  dimensions: string;
  size: string;
  altText: string;
  category: 'Portraits' | 'Theatre' | 'Editorial' | 'Film' | 'Behind the Scenes';
  isFeatured: boolean;
  createdAt: string;
}

export interface AdminInquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: InquiryStatus;
  isMockData: boolean;
}

export interface AdminSiteSettings {
  siteName: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
}
