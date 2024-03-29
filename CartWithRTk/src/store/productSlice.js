import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze(
    {
        IDLE: 'idle',
        ERROR: 'error',
        LOADING: 'loading'
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {

        // setProducts(state, action) {
        //     //kokhonoi asynchronous call reducer e korbona karon reducer ekta pure function ekhane kunu sideEffects hote parbe na.
        //     //const res = await fetch('https://fakestoreapi.com/products'); so asynchornous er jonno amra redux thunk use korbo.
        //     state.data = action.payload;
        // },

        // setStatus(state, action) {
        //     state.status = action.payload;

        // }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, () => {
                state.status = STATUSES.ERROR;
            })
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk('products/fetch', async () => {

    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data

})


//Thunks manually
// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING)); //data first ai pai nai so loading status rakhchi

//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE)); //data peyegechi so tai abar idle kore diyechi

//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }