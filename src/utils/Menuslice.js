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
    closemenu:(state)=>{
      state.istogglemenu = false;
    },
    openmenu:(state)=>{
      state.istogglemenu = true;
    }
  },

});
// exporting the reducer function 
export default Menuslice.reducer;
// exporting the action 
export const { Togglemenu , closemenu ,openmenu } = Menuslice.actions;
