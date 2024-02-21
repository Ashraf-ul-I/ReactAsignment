// In your Redux action creators (actions/animalActions.js and actions/natureActions.js)

import axios from 'axios';
import { baseUrl } from '../../features/galleryManage/baseUrl'; // Import baseUrl

export const fetchAnimals = (galleryId) => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/animal`); //${baseUrl}animal?galleryId=${galleryId}
        dispatch({ type: 'FETCH_ANIMALS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_ANIMALS_FAILURE', payload: error.message });
    }
};

// export const fetchNature = (galleryId) => async (dispatch) => {
//     try {
//         const response = await axios.get(`${baseUrl}nature?galleryId=${galleryId}`);
//         dispatch({ type: 'FETCH_NATURE_SUCCESS', payload: response.data });
//     } catch (error) {
//         dispatch({ type: 'FETCH_NATURE_FAILURE', payload: error.message });
//     }
// };
