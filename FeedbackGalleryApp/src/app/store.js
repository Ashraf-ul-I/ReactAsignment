import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from '../features/galleryManage/gmSlice';

const store = configureStore({
    reducer: {
        gallery: galleryReducer
    }
});

export default store;