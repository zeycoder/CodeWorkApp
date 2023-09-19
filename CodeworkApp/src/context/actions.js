export const ADD_JOB = 'ADD_JOB';
export const REMOVE_JOB = 'REMOVE_JOB';

export const addFavoriteJob = (job) => ({
  type: ADD_JOB,
  payload:  { favoriteJob: job }, 
});

export const removeFavoriteJob = (job) => ({
  type: REMOVE_JOB,
  payload:  { favoriteJob: job },
});
