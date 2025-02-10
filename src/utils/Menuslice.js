import { createSlice } from "@reduxjs/toolkit";

const Menuslice = createSlice({
  name: "sidebar",
  initialState: {
    istogglemenu: true,
  },
  reducers: {
    Togglemenu: (state) => {
      state.istogglemenu = !state.istogglemenu;
    },
  },
});

export default Menuslice.reducer;
export const { Togglemenu } = Menuslice.actions;
