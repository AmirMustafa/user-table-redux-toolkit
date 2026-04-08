import { createSlice } from '@reduxjs/toolkit';
import { deleteUsers } from '../actions';

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) { // state = userslice access
            state.push(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1);
        },
        // deleteUsers(state, action) { // Called from createActions
        //     return [];
        // },
    },
    extraReducers(builder) {
        builder.addCase(deleteUsers, () => {
            return [];
        });
    }
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;