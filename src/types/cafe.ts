export type MenuCategory = 
  | 'Coffee'
  | 'Tea'
  | 'Breakfast'
  | 'Snacks'
  | 'Main Course'
  | 'Desserts';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number; // in Nepali Rupees (रू)
  shortDescription: string;
  description: string;
  image: string;
  isSpecial?: boolean;
  isVegetarian?: boolean;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  prepTime?: string;
  calories?: string;
  ingredients?: string[];
  tastingNotes?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Coffee' | 'Interior' | 'Food' | 'Desserts';
  image: string;
  caption: string;
}

export interface ReservationData {
  fullName: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seating: 'Garden Patio' | 'Indoor Lounge' | 'Barista Bar' | 'Quiet Corner';
  specialRequests?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}
