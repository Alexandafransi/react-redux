import {configureStore} from "@reduxjs/toolkit";
import useSlice from "./slice/user";
import productSlice from "./slice/product";


const store = configureStore({
    reducer:{
        user: useSlice,
        product: productSlice
    }
})

export default store;