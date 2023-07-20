import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit'
import {timestampInterface} from "@/interfaces/timestampInterface";
import {RootState} from "@/store/store";

const initialState: timestampInterface = {
    current:{
        currentDate: "",
        currentTime: "",
        currentDayOfWeek: "",
        loaded: false,
    }
}

export const timestampSlice = createSlice({
    name: 'timestamp',
    initialState,
    reducers:{
        updateDate:(state, action)=>{
            state.current = action.payload;
        }
    }
})

export const { actions, reducer} = timestampSlice
export const selectTimestamp = (state: RootState) => state
export default timestampSlice.reducer

