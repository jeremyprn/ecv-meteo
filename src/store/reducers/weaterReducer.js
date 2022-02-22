import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
    name: 'wheater',
    initialState: {
        currentWeather: {}
    },
    reducers:{
        addWeather: (state, action) => {
            state.currentWeather = action.payload;
        }
    }
});

export const { addWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
