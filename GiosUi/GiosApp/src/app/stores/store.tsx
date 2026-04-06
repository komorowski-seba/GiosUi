import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Station } from '../../domain/Station';

interface UiState {
    isDrawerOpen: boolean;
    stations: Station[];
}

const initialState: UiState = {
    isDrawerOpen: false,
    stations: [],
};

const uiSlice = createSlice({
    name: "stations-drawer",
    initialState,
    reducers: {
        loadStations: (state: UiState, action: PayloadAction<Station[]>) => {
            state.stations = action.payload;
        },
        setDrawerOpen: (state: UiState, action: PayloadAction<boolean>) => {
            state.isDrawerOpen = action.payload;
        },
    },
});

export const { loadStations, setDrawerOpen } = uiSlice.actions;
export default uiSlice.reducer;