import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import axios from 'axios';

export const addFeedback = createAsyncThunk(
    'user/feedback',
    async (item, {
        dispatch,
        rejectWithValue
    }) => {
        try {
            const {
                data
            } = await axios({
                method: 'post',
                url: 'http://localhost:5005/feedback',
                data: item,
                withCredentials: true,
            });
            return data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(err.message);
        }
    }
);

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
        isLoading: false,
        error: null,
    },
    reducers: {
        clearError: state => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
    builder.addCase(addFeedback.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(addFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
    })
    .addCase(addFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    },
});

export const {
    clearError
} = feedbackSlice.actions;
export default feedbackSlice.reducer;
