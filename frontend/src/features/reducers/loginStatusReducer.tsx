import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = { username: '', email: '' }

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setLogin: (state, action) => {
      state.value = action.payload
    },
    setLogout: (state) => {
      state.value = initialStateValue
    },
  },
})

export const { setLogin, setLogout } = userSlice.actions

export default userSlice.reducer
