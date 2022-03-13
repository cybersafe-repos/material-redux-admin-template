import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload
    },
  },
})

export const { setLoading } = appSlice.actions
export const selectApp = state => state.app
export default appSlice.reducer
