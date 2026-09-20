// Real local image assets for Rashmi Uprety
import mainPhoto from '../assets/images/Main Photo.jpg';
import portraitImg from '../assets/images/portrait.jpg';
import pmb3283 from '../assets/images/PMB03283.jpg';
import pmb3284 from '../assets/images/PMB03284.jpg';
import pmb4429 from '../assets/images/PMB04429.jpg';
import theatre1 from '../assets/images/theatre-1.jpg';
import theatre2 from '../assets/images/theatre-2.jpg';
import dsc7111 from '../assets/images/DSC07111.JPG';
import dsc7418 from '../assets/images/DSC07418.JPG';
import img4724 from '../assets/images/IMG_4724.JPG';
import img4742 from '../assets/images/IMG_4742.JPG';
import img4744 from '../assets/images/IMG_4744.JPG';

export const HERO_IMAGE = {
  src: mainPhoto,
  alt: 'Rashmi Uprety portrait in artistic studio setting',
  width: 4000,
  height: 5234,
};

export const INTRO_IMAGE = {
  src: portraitImg,
  alt: 'Rashmi Uprety editorial portrait',
  width: 4000,
  height: 5234,
};

export const THEATRE_IMAGE = {
  src: theatre1,
  alt: 'Rashmi Uprety performing on stage in theatre production',
  width: 6000,
  height: 4000,
};

export const THEATRE_IMAGE_SECONDARY = {
  src: theatre2,
  alt: 'Rashmi Uprety dramatic theatre performance',
  width: 6000,
  height: 4000,
};

// Clearly marked temporary work projects data
export const TEMPORARY_WORK_PROJECTS = [
  {
    id: 'proj-01',
    number: '01',
    title: 'The Unspoken Solitude',
    role: 'Lead Role · Feature Film',
    year: '2024',
    category: 'Film',
    image: pmb4429,
    alt: 'Rashmi Uprety in feature film cinematic scene',
    isTemporary: true,
  },
  {
    id: 'proj-02',
    number: '02',
    title: 'Echoes in the Shadows',
    role: 'Protagonist · Independent Drama',
    year: '2023',
    category: 'Drama',
    image: pmb3283,
    alt: 'Rashmi Uprety dramatic portrait',
    isTemporary: true,
  },
  {
    id: 'proj-03',
    number: '03',
    title: 'Whispers of the Wind',
    role: 'Lead Character · Short Film',
    year: '2023',
    category: 'Short Film',
    image: pmb3284,
    alt: 'Rashmi Uprety character portrait',
    isTemporary: true,
  },
];

export const GALLERY_FEATURED = [
  { id: 'g1', src: dsc7111, alt: 'Rashmi Uprety portrait shoot', width: 3008, height: 2000 },
  { id: 'g2', src: dsc7418, alt: 'Rashmi Uprety editorial capture', width: 3008, height: 2000 },
  { id: 'g3', src: img4724, alt: 'Rashmi Uprety character expression', width: 3268, height: 4476 },
  { id: 'g4', src: img4742, alt: 'Rashmi Uprety studio portrait', width: 3375, height: 4931 },
  { id: 'g5', src: img4744, alt: 'Rashmi Uprety monochrome study', width: 3375, height: 4813 },
];

export const NAV_LINKS = [
  { number: '01', label: 'HOME', path: '/' },
  { number: '02', label: 'ABOUT', path: '/about' },
  { number: '03', label: 'WORK', path: '/work' },
  { number: '04', label: 'THEATRE', path: '/theatre' },
  { number: '05', label: 'GALLERY', path: '/gallery' },
  { number: '06', label: 'SHOWREEL', path: '/showreel' },
  { number: '07', label: 'CONTACT', path: '/contact' },
];

export const TEMPORARY_BIOGRAPHY = {
  text: "Rashmi Uprety is an actress and theatre artist whose work moves between performance, character and story.",
  isTemporary: true,
};
