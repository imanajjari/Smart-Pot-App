import { configureStore , createSlice} from "@reduxjs/toolkit";

const userSclice = createSlice({
    name:"user",
    initialState : {username : ""},
    reducers : {
        profile : (state, action) => {
            console.log("action.payload",action.payload)
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.phone = action.payload.phone
        },
        logout : (state) => {
            state.username = ""
        }
    }
})
export const {profile,logout } = userSclice.actions
export const store = configureStore({reducer : {
    user : userSclice.reducer
}})