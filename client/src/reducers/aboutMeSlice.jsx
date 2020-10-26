import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  id: nanoid(),
  about: 'Name is Derrick'
}

const aboutMeSlice = createSlice({
  name: 'aboutMe',
  initialState,
  reducers: {
    postAboutMe(state, action) {
      const aboutMe = action.payload;
    }
  }
});

export const { postAboutMe } = aboutMeSlice.actions;

export default aboutMeSlice.reducer;
