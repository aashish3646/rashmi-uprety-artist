import {
  AdminPageSummary,
  AdminProject,
  AdminTheatreProduction,
  AdminMediaAsset,
  AdminInquiry,
  AdminSiteSettings,
} from '../../types/admin';

// Real local image imports for mock data references
import mainPhoto from '../../assets/images/Main Photo.jpg';
import portraitImg from '../../assets/images/portrait.jpg';
import pmb3283 from '../../assets/images/PMB03283.jpg';
import pmb3284 from '../../assets/images/PMB03284.jpg';
import pmb4429 from '../../assets/images/PMB04429.jpg';
import theatre1 from '../../assets/images/theatre-1.jpg';
import theatre2 from '../../assets/images/theatre-2.jpg';
import dsc7111 from '../../assets/images/DSC07111.JPG';
import dsc7418 from '../../assets/images/DSC07418.JPG';
import img4724 from '../../assets/images/IMG_4724.JPG';

export const MOCK_ADMIN_STATS = {
  publishedWorks: 6,
  mediaAssets: 18,
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
    featuredImage: pmb4429,
    galleryImages: [pmb4429, portraitImg],
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
    featuredImage: pmb3283,
    galleryImages: [pmb3283, dsc7111],
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
    featuredImage: pmb3284,
    galleryImages: [pmb3284],
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
    featuredImage: theatre1,
    galleryImages: [theatre1, theatre2],
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
    featuredImage: theatre2,
    galleryImages: [theatre2],
    description: 'Experimental contemporary play exploring movement and spoken dialogue. [Demo Data]',
    status: 'Published',
    lastUpdated: '2026-09-12',
    isMockData: true,
  },
];

export const MOCK_MEDIA_ASSETS: AdminMediaAsset[] = [
  {
    id: 'm1',
    filename: 'Main Photo.jpg',
    src: mainPhoto,
    type: 'image',
    dimensions: '4000 x 5234 px',
    size: '10.6 MB',
    altText: 'Rashmi Uprety studio portrait for homepage hero',
    category: 'Portraits',
    isFeatured: true,
    createdAt: '2026-09-01',
  },
  {
    id: 'm2',
    filename: 'portrait.jpg',
    src: portraitImg,
    type: 'image',
    dimensions: '4000 x 5234 px',
    size: '10.6 MB',
    altText: 'Rashmi Uprety editorial portrait study',
    category: 'Editorial',
    isFeatured: true,
    createdAt: '2026-09-02',
  },
  {
    id: 'm3',
    filename: 'theatre-1.jpg',
    src: theatre1,
    type: 'image',
    dimensions: '6000 x 4000 px',
    size: '7.6 MB',
    altText: 'Rashmi Uprety dramatic stage performance',
    category: 'Theatre',
    isFeatured: true,
    createdAt: '2026-09-05',
  },
  {
    id: 'm4',
    filename: 'theatre-2.jpg',
    src: theatre2,
    type: 'image',
    dimensions: '6000 x 4000 px',
    size: '7.1 MB',
    altText: 'Rashmi Uprety stage monologue moment',
    category: 'Theatre',
    isFeatured: false,
    createdAt: '2026-09-06',
  },
  {
    id: 'm5',
    filename: 'PMB04429.jpg',
    src: pmb4429,
    type: 'image',
    dimensions: '6336 x 9504 px',
    size: '26.1 MB',
    altText: 'Cinematic project key art still',
    category: 'Film',
    isFeatured: true,
    createdAt: '2026-09-08',
  },
  {
    id: 'm6',
    filename: 'DSC07111.JPG',
    src: dsc7111,
    type: 'image',
    dimensions: '3008 x 2000 px',
    size: '4.0 MB',
    altText: 'Behind the scenes studio portrait',
    category: 'Behind the Scenes',
    isFeatured: false,
    createdAt: '2026-09-10',
  },
  {
    id: 'm7',
    filename: 'DSC07418.JPG',
    src: dsc7418,
    type: 'image',
    dimensions: '3008 x 2000 px',
    size: '5.2 MB',
    altText: 'Editorial outdoor portrait capture',
    category: 'Editorial',
    isFeatured: false,
    createdAt: '2026-09-11',
  },
  {
    id: 'm8',
    filename: 'IMG_4724.JPG',
    src: img4724,
    type: 'image',
    dimensions: '3268 x 4476 px',
    size: '2.1 MB',
    altText: 'Character facial expression study',
    category: 'Portraits',
    isFeatured: false,
    createdAt: '2026-09-14',
  },
];

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
  ogImage: 'src/assets/images/Main Photo.jpg',
};

export const MOCK_RECENT_ACTIVITY = [
  { id: 'act-1', text: 'Updated Home Page Hero configuration', time: '10 mins ago', user: 'Admin' },
  { id: 'act-2', text: 'Added new Theatre production "The Cherry Orchard"', time: '2 hours ago', user: 'Admin' },
  { id: 'act-3', text: 'Received new Inquiry from Aarav Sharma', time: '6 hours ago', user: 'System' },
  { id: 'act-4', text: 'Uploaded 3 new high-res media assets', time: '1 day ago', user: 'Admin' },
];
