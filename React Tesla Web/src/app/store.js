import { configureStore } from "@reduxjs/toolkit";

import carReduer from  "../features/car/carSlice"

export const store = configureStore({
    reducer:{
        car : carReduer
    },
});