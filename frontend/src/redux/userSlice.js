import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "ThanhCow",
        age: "0",
        about: "I'm developer",
        avaUrl: "https://anhnendep.net/wp-content/uploads/2016/04/hinh-avata-chibi-de-thuong-cute-13.jpg",
        theme: "#ff9051",
        pending: false,
        error: false,
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true
        },
        updateError: (state) => {
            state.pending = false
            state.error = true

        },
        updateSuccess: (state, action) => {
            state.pending = false
            state.error = false
            state.name = action.payload.name
            state.age = action.payload.age
            state.about = action.payload.about
            state.avaUrl = action.payload.avaUrl
            state.theme = action.payload.theme
        }
    }
})

export const { updateStart, updateError, updateSuccess } = userSlice.actions
export default userSlice.reducer