export const fetchGalleryData = createAsyncThunk(
    'gallery/fetchData',
    async () => {
        const response = await axios.get(baseUrl + 'gallery');
        return response.data;
    }
);

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGalleryData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGalleryData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload.gallery;
            })
            .addCase(fetchGalleryData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default gallerySlice.reducer;
