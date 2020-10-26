/*
  action types
*/

export const ADD_ABOUT_ME = 'ADD_ABOUT_ME';
export const ADD_PROJECTS = 'ADD_PROJECTS';

/*
  action creators
*/

export function addAboutMe(text) {
  return {type: ADD_ABOUT_ME, text}
}

export function addProjects(text) {
  return {type: ADD_PROJECTS, text}
}
