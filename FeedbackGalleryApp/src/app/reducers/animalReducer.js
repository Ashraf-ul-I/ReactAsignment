// In your Redux reducers (reducers/animalReducer.js and reducers/natureReducer.js)

const initialState = {
    data: [],
    loading: true,
    error: null,
};

const animalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ANIMALS_SUCCESS':
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_ANIMALS_FAILURE':
            return {
                ...state,
                data: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default animalReducer;
