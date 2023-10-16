import { configureStore } from "@reduxjs/toolkit";
import  addDataSlice  from "../Redux/addData";
import fetchDataSlice  from "../Redux/FetchData";


export const store = configureStore({
    reducer: {
        addDataSlice: addDataSlice,
        myItems: fetchDataSlice,
    }
})