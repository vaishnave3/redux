import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = "black"

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue },
    reducers: {
        theme: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { theme } = themeSlice.actions

export default themeSlice.reducer