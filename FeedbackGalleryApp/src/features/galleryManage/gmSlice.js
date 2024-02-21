import { baseUrl } from "./baseUrl";
import axios from "axios";
export const fetchGalleryData = createAsyncThunk(
    'gallery/fetchData', () => {
        return axios.get(baseUrl + 'gallery')
            .then(response => response.data.map((item) => item.gallery))
    }

);

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {

        setData: (state, action) => {
            const gData = {
                data: action.payload
            }
        }

    },

});

export default gallerySlice.reducer;
