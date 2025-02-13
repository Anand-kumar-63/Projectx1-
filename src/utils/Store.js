// import { configureStore } from "@reduxjs/toolkit";
// import {Menuslice} from "./Menuslice";
// const AppStore = configureStore({
// reducer:{
//   sidebar:Menuslice}
// })

// export default AppStore;
import { configureStore } from "@reduxjs/toolkit";
import Menuslice from "./Menuslice"; // Import default export correctly

const AppStore = configureStore({
  reducer: {
    sidebar: Menuslice, // Use the Menuslice reducer here
  },
  
});

export default AppStore;
