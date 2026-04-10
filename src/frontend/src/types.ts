export interface Sweet {
  id: string;
  nameHindi: string;
  nameEnglish: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  isPopular?: boolean;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validTill: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
