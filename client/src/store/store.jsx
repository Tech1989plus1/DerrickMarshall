import { configureStore } from '@reduxjs/toolkit';
import aboutMeReducer from '../reducers/aboutMeSlice.jsx';
import projectsReducer from '../reducers/projectsSlice.jsx';

export default configureStore ({
  reducer: {
    aboutMeData: aboutMeReducer,
    projectsData: projectsReducer
  }
});
