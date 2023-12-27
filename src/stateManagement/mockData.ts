import { Drink, Meal, Venue } from './types';
import { Rating, DrinkType, ServingType, VenueType } from './enums';

export const drinks: Drink[] = [
  {
    id: '1',
    name: 'Pilsner',
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
    name: 'Flat White',
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
    id: `${Date.now()}`,
    name: 'Shadow',
    drinks,
    meals,
    type: VenueType.Bar,
    rating: Rating.Good,
  },
];
