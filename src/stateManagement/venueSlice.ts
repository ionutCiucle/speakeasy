import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Venue, Drink } from './types';
import { venues } from './mockData';
import { Rating } from './enums';
import { getItemById } from './utils';

type VenueState = {
  createVenue: null;
  venues: Venue[];
};

const initialState: VenueState = {
  createVenue: null,
  venues,
};

const venueState = createSlice({
  name: 'venues',
  initialState,
  reducers: {
    addNewVenue(state, action: PayloadAction<Pick<Venue, 'name' | 'type'>>) {
      const id = `${action.payload.name}-${Date.now()}`;

      state.venues.push({
        id,
        drinks: [],
        meals: [],
        rating: null,
        ...action.payload,
      });
    },
    removeVenue(state, action: PayloadAction<string>) {
      const nextVenues = state.venues.filter(
        (venue) => venue.id !== action.payload,
      );
      state.venues = nextVenues;
    },
    updateVenueRating(
      state,
      action: PayloadAction<{ venueId: Venue['id']; rating: Rating }>,
    ) {
      const venue = getItemById(state.venues, action.payload.venueId)!;

      venue.rating = action.payload.rating;
    },
    addDrinkToVenue(
      state,
      action: PayloadAction<
        Pick<Drink, 'name' | 'type' | 'servingType' | 'price'> & {
          venueId: Venue['id'];
        }
      >,
    ) {
      const venue = getItemById(state.venues, action.payload.venueId)!;

      venue.drinks.push({
        ...action.payload,
        id: `${action.payload.name}-${Date.now()}`,
        rating: null,
      });
    },
    removeDrinkFromMenu(
      state,
      action: PayloadAction<{
        venueId: Venue['id'];
        id: Drink['id'];
      }>,
    ) {
      const venue = getItemById(state.venues, action.payload.venueId)!;
      const nextVenueDrinks = venue?.drinks.filter(
        ({ id }) => id === action.payload.id,
      );

      venue.drinks = nextVenueDrinks;
    },
  },
});

export const {
  addNewVenue,
  removeVenue,
  addDrinkToVenue,
  removeDrinkFromMenu,
  updateVenueRating,
} = venueState.actions;

export default venueState.reducer;
