import { ServingType, DrinkType, VenueType, Rating } from './enums';

export type Drink = {
  id: string;
  name: string;
  type: DrinkType;
  servingType: ServingType;
  price: number;
  rating: Rating | null;
};

export type Meal = {
  id: string;
  name: string;
  price: number;
  rating: Rating | null;
};

export type Venue = {
  id: string;
  name: string;
  type: VenueType;
  drinks: Drink[];
  meals: Meal[];
  rating: Rating | null;
};
