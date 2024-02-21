// In your Redux reducers (reducers/index.js)

import { combineReducers } from 'redux';
import animalReducer from './animalReducer';
// import natureReducer from './natureReducer';

const rootReducer = combineReducers({
    animal: animalReducer,
    //   nature: natureReducer,
    // Add more reducers if needed
});

export default rootReducer;
