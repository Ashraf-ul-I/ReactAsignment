import { configureStore } from "@reduxjs/toolkit";
import galleryData from "../redux/galleryData";
const store = configureStore({
    reducer: galleryData
})

export default store;