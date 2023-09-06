export const ADD_FAVORITE_JOB = 'ADD_FAVORITE_JOB';
export const REMOVE_FAVORITE_JOB = 'REMOVE_FAVORITE_JOB';

export const addFavoriteJob = (job) => ({
  type: ADD_FAVORITE_JOB,
  payload: job,
});

export const removeFavoriteJob = (jobId) => ({
  type: REMOVE_FAVORITE_JOB,
  payload: jobId,
});
