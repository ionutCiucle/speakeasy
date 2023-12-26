import { createSlice } from "@reduxjs/toolkit";

import { DrinkType, ServingType } from "./enums";

const initialState = {
  drinks: [
    {
      id: 1,
      name: "Pilsner",
      type: DrinkType.Beer,
      servingType: ServingType.Pint,
      price: 17,
    },
    {
      id: 2,
      name: "Hacker Pschorr",
      type: DrinkType.Beer,
      servingType: ServingType.Pint,
      price: 20,
    },
    {
      id: 3,
      name: "Flat White",
      type: DrinkType.Coffee,
      servingType: ServingType.Cup,
      price: 15,
    },
  ],
  food: [
    {
      id: 1,
      name: "Goulash Soup",
      price: 20,
    },
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
