export const ADD_ABOUT_ME = 'ADD_ABOUT_ME';
export const PROJECTS = 'PROJECTS';

export function addAboutMe(text) {
  return { type: ADD_ABOUT_ME, text}
}

export function projects(text) {
  return { type: PROJECTS, text}
}
