import { createSlice, nanoid } from '@reduxjs/toolkit';

const faker = require('faker');

const initialState = {
  id: nanoid(),
  summary: faker.lorem.paragraph()
}

const projectsSlice = createSlice({
  name: 'Projects',
  initialState,
  reducers: {
    postProjects(state, action) {

    }
  }
});

export const { postProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
