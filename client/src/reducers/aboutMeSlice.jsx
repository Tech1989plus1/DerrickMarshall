import { createSlice, nanoid } from '@reduxjs/toolkit';

const faker = require('faker');

const initialState = {
  id: nanoid(),
  summary: faker.lorem.paragraph()
}

const aboutMeSlice = createSlice({
  name: 'AboutMe',
  initialState,
  reducers: {
    postAboutMe(state, action) {

    }
  }
});

export const { postAboutMe } = aboutMeSlice.actions;

export default aboutMeSlice.reducer;
