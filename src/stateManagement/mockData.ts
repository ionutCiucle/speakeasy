import { Drink, Meal, Venue } from './types';
import { Rating, DrinkType, ServingType, VenueType, Currency } from './enums';

export const drinks: Drink[] = [
  {
    id: '1',
    name: 'Pilsner Urquell',
    type: DrinkType.Beer,
    servingType: ServingType.Pint,
    price: 17,
    rating: Rating.Excellent,
  },
  {
    id: '2',
    name: 'Hacker Pschorr',
    type: DrinkType.Beer,
    servingType: ServingType.Pint,
    price: 20,
    rating: Rating.Excellent,
  },
  {
    id: '3',
    name: 'Iulius Meinl Flat White',
    type: DrinkType.Coffee,
    servingType: ServingType.Cup,
    price: 15,
    rating: Rating.Good,
  },
  {
    id: '4',
    name: 'Babanu',
    type: DrinkType.Wine,
    servingType: ServingType.Bottle,
    price: 3,
    rating: Rating.Terrible,
  },
];

export const meals: Meal[] = [
  {
    id: '1',
    name: 'Goulash Soup',
    price: 20,
    rating: Rating.Good,
  },
];

export const venues: Venue[] = [
  {
    id: `shadow`,
    name: 'Shadow',
    drinks,
    meals,
    type: VenueType.Bar,
    rating: Rating.Good,
    currency: Currency.RON,
  },
  {
    id: `plani`,
    name: 'Planetarium',
    drinks,
    meals: [],
    type: VenueType.Bar,
    rating: Rating.Excellent,
    currency: Currency.RON,
  },
  {
    id: `che`,
    name: 'Che Guevara',
    drinks,
    meals: [],
    type: VenueType.Bar,
    rating: Rating.Terrible,
    currency: Currency.RON,
  },
  {
    id: `tuk`,
    name: 'Tucano',
    drinks,
    meals: [],
    type: VenueType.Cafe,
    rating: Rating.Excellent,
    currency: Currency.RON,
  },
  {
    id: `speis`,
    name: '/FormSpace',
    drinks,
    meals: [],
    type: VenueType.ConcertHall,
    rating: Rating.NotGreatNotTerrible,
    currency: Currency.RON,
  },
  {
    id: `bulgakov`,
    name: 'Bulgakov',
    drinks,
    meals: [],
    type: VenueType.Restaurant,
    rating: Rating.Excellent,
    currency: Currency.RON,
  },
  {
    id: `sancho`,
    name: 'Sancho Panza',
    drinks,
    meals: [],
    type: VenueType.Restaurant,
    rating: Rating.NotGreatNotTerrible,
    currency: Currency.RON,
  },
];
