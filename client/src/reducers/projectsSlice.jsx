import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  id: nanoid(),
  project: 'Name is Projects'
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    postProjects(state, action) {
      const project = action.payload;
    }
  }
});

export const { postProjects } = projectsSlice.actions;

export default projectsSlice.reducer;