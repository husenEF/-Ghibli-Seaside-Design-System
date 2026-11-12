export type TimeOfDay = 'morning' | 'afternoon' | 'sunset' | 'twilight';

export interface ColorToken {
  name: string;
  role: string;
  hex: string;
  variable: string;
  textContrast: string;
  usage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'village' | 'cove' | 'railway' | 'garden';
  image: string;
  palette: string[];
  description: string;
  aspect: string;
}
