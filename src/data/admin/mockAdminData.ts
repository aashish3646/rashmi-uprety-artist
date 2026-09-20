import {
  AdminPageSummary,
  AdminProject,
  AdminTheatreProduction,
  AdminMediaAsset,
  AdminInquiry,
  AdminSiteSettings,
} from '../../types/admin';
import { IMAGE_REGISTRY } from '../contentData';

export const MOCK_ADMIN_STATS = {
  publishedWorks: 6,
  mediaAssets: Object.keys(IMAGE_REGISTRY).length,
  drafts: 2,
  inquiries: 5,
};

export const MOCK_PAGES: AdminPageSummary[] = [
  { id: 'p1', title: 'Home', path: '/', status: 'Published', lastUpdated: '2026-09-20', sectionsCount: 6 },
  { id: 'p2', title: 'About', path: '/about', status: 'Published', lastUpdated: '2026-09-18', sectionsCount: 3 },
  { id: 'p3', title: 'Work', path: '/work', status: 'Published', lastUpdated: '2026-09-19', sectionsCount: 2 },
  { id: 'p4', title: 'Theatre', path: '/theatre', status: 'Published', lastUpdated: '2026-09-15', sectionsCount: 3 },
  { id: 'p5', title: 'Showreel', path: '/showreel', status: 'Draft', lastUpdated: '2026-09-10', sectionsCount: 2 },
  { id: 'p6', title: 'Gallery', path: '/gallery', status: 'Published', lastUpdated: '2026-09-12', sectionsCount: 1 },
  { id: 'p7', title: 'Contact', path: '/contact', status: 'Published', lastUpdated: '2026-09-01', sectionsCount: 2 },
];

export const MOCK_PROJECTS: AdminProject[] = [
  {
    id: 'proj-01',
    title: 'The Unspoken Solitude',
    category: 'Film',
    role: 'Lead Role',
    year: '2024',
    description: 'A feature film exploring human connections and emotional isolation. [Demo Data]',
    featuredImage: IMAGE_REGISTRY['film-pmb4429'].src,
    galleryImages: [IMAGE_REGISTRY['film-pmb4429'].src, IMAGE_REGISTRY['portrait-editorial'].src],
    externalLink: 'https://example.com/project-1',
    status: 'Published',
    lastUpdated: '2026-09-20',
    isMockData: true,
  },
  {
    id: 'proj-02',
    title: 'Echoes in the Shadows',
    category: 'Drama',
    role: 'Protagonist',
    year: '2023',
    description: 'Independent cinematic drama performance. [Demo Data]',
    featuredImage: IMAGE_REGISTRY['film-pmb3283'].src,
    galleryImages: [IMAGE_REGISTRY['film-pmb3283'].src, IMAGE_REGISTRY['gallery-dsc7111'].src],
    status: 'Published',
    lastUpdated: '2026-09-19',
    isMockData: true,
  },
  {
    id: 'proj-03',
    title: 'Whispers of the Wind',
    category: 'Short Film',
    role: 'Lead Character',
    year: '2023',
    description: 'Poetic short film focusing on character expression and monologue. [Demo Data]',
    featuredImage: IMAGE_REGISTRY['film-pmb3284'].src,
    galleryImages: [IMAGE_REGISTRY['film-pmb3284'].src],
    status: 'Draft',
    lastUpdated: '2026-09-15',
    isMockData: true,
  },
];

export const MOCK_THEATRE_PRODUCTIONS: AdminTheatreProduction[] = [
  {
    id: 'th-01',
    production: 'The Cherry Orchard (Adaptation)',
    character: 'Varya',
    director: 'Independent Stage Director [Demo]',
    company: 'City Theatre Ensemble [Demo]',
    venue: 'National Theatre Stage [Demo]',
    year: '2024',
    featuredImage: IMAGE_REGISTRY['theatre-stage-1'].src,
    galleryImages: [IMAGE_REGISTRY['theatre-stage-1'].src, IMAGE_REGISTRY['theatre-stage-2'].src],
    description: 'A dramatic adaptation focusing on classical stage presence and character transformation. [Demo Data]',
    status: 'Published',
    lastUpdated: '2026-09-20',
    isMockData: true,
  },
  {
    id: 'th-02',
    production: 'Silence in the Rain',
    character: 'Maya',
    director: 'Creative Stage Ensemble [Demo]',
    company: 'Contemporary Drama Lab [Demo]',
    venue: 'Black Box Theatre [Demo]',
    year: '2023',
    featuredImage: IMAGE_REGISTRY['theatre-stage-2'].src,
    galleryImages: [IMAGE_REGISTRY['theatre-stage-2'].src],
    description: 'Experimental contemporary play exploring movement and spoken dialogue. [Demo Data]',
    status: 'Published',
    lastUpdated: '2026-09-12',
    isMockData: true,
  },
];

// Map all registry items into AdminMediaAssets with Usage metadata
export const MOCK_MEDIA_ASSETS: AdminMediaAsset[] = Object.values(IMAGE_REGISTRY).map((img) => ({
  id: img.imageId,
  filename: img.filename,
  src: img.src,
  type: 'image',
  dimensions: img.dimensions,
  size: img.size,
  altText: img.alt,
  category: img.category as any,
  usage: img.usage,
  featured: img.featured,
  project: img.project,
  year: img.year,
  orientation: img.orientation,
  isFeatured: img.featured,
  imageId: img.imageId,
  alt: img.alt,
  createdAt: '2026-09-01',
}));

export const MOCK_INQUIRIES: AdminInquiry[] = [
  {
    id: 'inq-101',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    subject: 'Feature Film Casting Inquiry',
    message: 'We are currently casting for an upcoming indie feature film and would love to send the script to Rashmi\'s team.',
    date: '2026-09-20 14:32',
    status: 'New',
    isMockData: true,
  },
  {
    id: 'inq-102',
    name: 'Siddharth Thapa',
    email: 'siddharth@theatrefest.org',
    subject: 'Stage Festival Keynote Performance',
    message: 'Inviting Rashmi Uprety for a lead role in the opening stage production of the National Drama Festival.',
    date: '2026-09-19 11:15',
    status: 'New',
    isMockData: true,
  },
  {
    id: 'inq-103',
    name: 'Pooja Karki',
    email: 'pooja@productionhouse.com',
    subject: 'Commercial Brand Collaboration',
    message: 'Inquiry regarding commercial brand campaign shoots scheduled for Q4.',
    date: '2026-09-17 09:40',
    status: 'Read',
    isMockData: true,
  },
  {
    id: 'inq-104',
    name: 'Rohan Shrestha',
    email: 'rohan.media@example.com',
    subject: 'Editorial Interview Request',
    message: 'Requesting an interview and cover shoot for the upcoming arts journal edition.',
    date: '2026-09-12 16:20',
    status: 'Archived',
    isMockData: true,
  },
];

export const MOCK_SITE_SETTINGS: AdminSiteSettings = {
  siteName: 'Rashmi Uprety — Official Artist Website',
  tagline: 'Actress & Theatre Artist',
  contactEmail: 'contact@rashmiuprety.com [Demo]',
  contactPhone: '+977 9800000000 [Demo]',
  instagramUrl: 'https://instagram.com/demo_rashmiuprety',
  facebookUrl: 'https://facebook.com/demo_rashmiuprety',
  youtubeUrl: 'https://youtube.com/demo_rashmiuprety',
  tiktokUrl: 'https://tiktok.com/@demo_rashmiuprety',
  metaTitle: 'Rashmi Uprety — Actress & Theatre Artist Portfolio',
  metaDescription: 'Official portfolio website of Rashmi Uprety featuring film work, theatre productions, showreel, and portraits.',
  ogImage: IMAGE_REGISTRY['main-photo'].src,
};

export const MOCK_RECENT_ACTIVITY = [
  { id: 'act-1', text: 'Assigned unique image assets across Hero, About, Work & Contact sections', time: '10 mins ago', user: 'Admin' },
  { id: 'act-2', text: 'Updated Home Page Hero configuration', time: '1 hour ago', user: 'Admin' },
  { id: 'act-3', text: 'Added new Theatre production "The Cherry Orchard"', time: '2 hours ago', user: 'Admin' },
  { id: 'act-4', text: 'Received new Inquiry from Aarav Sharma', time: '6 hours ago', user: 'System' },
];
