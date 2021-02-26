import { createSlice, current  } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: "user",

  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      console.log('hola');
      state.user = action.payload
    },
    logout: state => {
      console.log('adios');
      state.user = null;
    },
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer