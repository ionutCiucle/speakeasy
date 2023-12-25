import { createSlice } from "@reduxjs/toolkit";
import { DrinkType, ServingType } from "./enums";

const initialState = {
  drinks: [
    {
      name: "Pilsner",
      type: DrinkType.Beer,
      servingType: ServingType.Pint,
      price: 17,
      count: 1,
    },
    {
      name: "Hacker Pschorr",
      type: DrinkType.Beer,
      servingType: ServingType.Pint,
      price: 20,
      count: 1,
    },
    {
      name: "Flat White",
      type: DrinkType.Coffee,
      servingType: ServingType.Cup,
      price: 15,
      count: 1,
    },
  ],
  meals: [],
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {},
});

export default generalSlice.reducer;
