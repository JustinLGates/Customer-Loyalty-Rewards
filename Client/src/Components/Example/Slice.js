import { createSlice } from "@reduxjs/toolkit";

export const customer = createSlice({
  name: "customer",
  initialState: {
    name: "",
    phone: "",
    points: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setPoints: (state, action) => {
      state.points = action.payload;
    },
  },
});

export const { setName, setPhone, setPoints } = customer.actions;

export const selectCustomerPhone = (state) => state.customer.phone;

export const selectCustomerPoints = (state) => state.customer.points;

export const selectCustomerName = (state) => state.customer.name;

export default customer.reducer;
