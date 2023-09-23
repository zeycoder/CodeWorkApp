    const reducers = (state, action) => {
        switch (action.type) {
            case 'ADD_JOB':
                return {...state,favoriteJobList:[...state.favoriteJobList,action.payload.favoriteJob]}
            case 'REMOVE_JOB':
                return {...state,favoriteJobList: state.favoriteJobList.filter(job => job.id !== action.payload.favoriteJob.id),}
            default:
                return state;
        }
    };

    export default reducers;
