import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: '',
    status: null,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export default userSlice.reducer;
export const {} = userSlice.actions;