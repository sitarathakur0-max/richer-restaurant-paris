export type PageId = 'home' | 'menu' | 'about' | 'wine' | 'reviews' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface DishItem {
  id: string;
  name: string;
  description: string;
  category: 'Starters' | 'Mains';
  source: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  authorMeta: string;
  date: string;
  rating: number;
  content: string;
  highlights: string[];
}
