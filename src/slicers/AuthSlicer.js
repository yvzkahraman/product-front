import { createSlice } from "@reduxjs/toolkit"

const state = {
    isAuth: false,
    username: ''
}

const authSlicer = createSlice({
    name: 'Auth',
    initialState: state,
    reducers: {
        login: (state) => {
            state.isAuth = true;
            // return {
            //     isAuth: true;
            // }
        },
        logout: (state) => {
            state.isAuth = false;
        },
        setUserName: (state, action) => {
            state.username = action.payload
        }
    }
});

export const { login, logout } = authSlicer.actions
export default authSlicer.reducer;