import { createSlice } from '@reduxjs/toolkit';

import { DrinkType, ServingType } from './enums';

type Drink = {
  id: string;
  name: string;
  type: DrinkType;
  servingType: ServingType;
  price: number;
};

type Meal = {
  id: string;
  name: string;
  price: number;
};

type MenuState = {
  drinks: Drink[];
  meals: Meal[];
};

const initialState: MenuState = {
  drinks: [
    {
      id: '1',
      name: 'Pilsner',
      type: DrinkType.Beer,
      servingType: ServingType.Pint,
      price: 17,
    },
    {
      id: '2',
      name: 'Hacker Pschorr',
      type: DrinkType.Beer,
      servingType: ServingType.Pint,
      price: 20,
    },
    {
      id: '3',
      name: 'Flat White',
      type: DrinkType.Coffee,
      servingType: ServingType.Cup,
      price: 15,
    },
  ],
  meals: [
    {
      id: '1',
      name: 'Goulash Soup',
      price: 20,
    },
  ],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
