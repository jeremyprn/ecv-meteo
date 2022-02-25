import { createSlice } from '@reduxjs/toolkit'
import cities from '../../assets/data/cities';

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        cities: []
    },
    reducers:{
        addCity: (state, action) => {
            state.cities.push(action.payload);
        },
        removeCity: (state, action) => {
            state.cities.splice(action.payload, 1);
        }
    }
});

export const { addCity, removeCity } = citiesSlice.actions;

export default citiesSlice.reducer;
