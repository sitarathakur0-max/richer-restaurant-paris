/**
 * Centralized Business Configuration for Richer Restaurant Paris 9
 * All data strictly reflects verified official business information.
 */

import heroInteriorImg from '../assets/images/richer_hero_interior_1789753311612.jpg';
import culinaryDishImg from '../assets/images/richer_culinary_dish_1789753326603.jpg';
import wineSettingImg from '../assets/images/richer_wine_setting_1789753343933.jpg';

export const business = {
  name: 'Richer Restaurant Paris 9',
  shortName: 'Richer',
  type: 'Restaurant',
  cuisine: 'Contemporary Parisian & Local French',
  address: '2 Rue Richer, 75009 Paris, France',
  streetAddress: '2 Rue Richer',
  postalCode: '75009',
  city: 'Paris',
  arrondissement: '9e arrondissement (Faubourg-Montmartre)',
  country: 'France',
  phone: '+33 9 67 29 18 43',
  phoneHref: 'tel:+33967291843',
  priceRange: '€30–70',
  priceRangeFormatted: '€30–70 per person',
  rating: 4.2,
  reviewCount: 1402,
  services: ['Dine-in', 'Takeout', 'Delivery'] as const,
  status: 'Open · Closes 12 AM',
  website: 'lericher.com',
  websiteUrl: 'https://lericher.com',
  menuSource: 'groupe-compagnon.com — Le Richer',
  menuSourceUrl: 'https://groupe-compagnon.com',
  // Official TheFork reservation destination for Richer Restaurant Paris 9
  reservationUrl: 'https://www.thefork.com/restaurant/richer-r21524',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Richer+Restaurant+Paris+9+2+Rue+Richer+75009+Paris',
  plusCode: 'V8FX+J3 Paris, France',
  images: {
    hero: heroInteriorImg,
    dish: culinaryDishImg,
    wine: wineSettingImg,
  },
  verifiedDishes: [
    {
      id: 'sea-bass',
      name: 'Sea Bass Fillet with Stuffed Zucchini',
      description: 'Delicate pan-seared sea bass served with garden-stuffed zucchini finished in a toasted hazelnut and roasted garlic sauce.',
      category: 'Mains',
      source: 'Verified review & kitchen highlight',
    },
    {
      id: 'burrata',
      name: 'Artisanal Burrata',
      description: 'Creamy burrata paired with seasonal Parisian market garnishes and pressed olive oil.',
      category: 'Starters',
      source: 'Verified menu highlight',
    },
    {
      id: 'ravioli-ratatouille',
      name: 'Ratatouille Ravioli',
      description: 'House-made thin pasta parcels filled with slow-simmered Provencal vegetables in herb reduction.',
      category: 'Mains',
      source: 'Verified menu highlight',
    },
    {
      id: 'ravioli-kitchen',
      name: 'Fresh Seasonal Ravioli',
      description: 'Handcrafted pasta folded daily with tender market fillings and light kitchen broth.',
      category: 'Starters',
      source: 'Verified menu highlight',
    },
    {
      id: 'veal-blanquette',
      name: 'Veal Blanquette',
      description: 'Understated Parisian bistro classic prepared with tender simmered veal, silky velouté, and glazed baby vegetables.',
      category: 'Mains',
      source: 'Verified menu highlight',
    },
  ],
  verifiedReviews: [
    {
      id: 'dave-flett',
      author: 'Dave Flett',
      authorMeta: 'Local Guide · 52 reviews · 85 photos',
      date: 'Visited in June',
      rating: 5,
      content: 'A standout dining experience in Paris 9. The sea bass fillet with stuffed zucchini in hazelnut and garlic sauce was beautifully balanced and executed with great restraint. Paired exceptionally well with their orange wine recommendation. Relaxed, intimate Parisian atmosphere.',
      highlights: ['Sea bass fillet with stuffed zucchini', 'Hazelnut & garlic sauce', 'Orange wine selection'],
    },
    {
      id: 'natasa-stantic',
      author: 'Nataša Stantić',
      authorMeta: 'Local Guide · 52 reviews · 147 photos',
      date: 'Visited in October 2025',
      rating: 5,
      content: 'Warm and attentive welcome from the moment we walked in. We were seated overlooking the open kitchen which gave a wonderful rhythm to the meal. The staff was genuinely accommodating and their orange wine recommendation was spot on.',
      highlights: ['Warm welcome', 'Seating overlooking the kitchen', 'Accommodating staff', 'Orange wine recommendation'],
    },
    {
      id: 'paulette-peterson',
      author: 'Paulette Peterson',
      authorMeta: 'Local Guide · 26 reviews · 8 photos',
      date: 'Visited in June',
      rating: 3,
      content: 'The exposed-stone interior and neighborhood character are charming, but during peak evening hours the pacing of service was slower than expected. An authentic Parisian spot with character, though service speed can vary on busy nights.',
      highlights: ['Exposed-stone atmosphere', 'Busy peak hours', 'Authentic neighborhood table'],
    },
  ],
};
