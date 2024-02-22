import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error'
})

const initialState = {
    data: [],
    status: STATUSES.IDLE
}


const gallerySlice = createSlice({

    name: 'gData',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }


})

export default gallerySlice.reducer;

export const fetchData = createAsyncThunk('gallerydata/fetch', async () => {
    const res = await fetch('http://localhost:3001/');
    const data = await res.json();
    return data;
})

