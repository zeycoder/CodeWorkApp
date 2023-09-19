    const reducers = (state, action) => {
        switch (action.type) {
            case 'ADD_JOB':
                console.log('aaaaa')
                return {...state,favoriteJobList:[...state.favoriteJobList,action.payload.favoriteJob]}
            case 'REMOVE_JOB':
                return {...state,favoriteJobList:[state.favoriteJobList.filter(job => job.id !== action.job.id)],}
            default:
                return state;
        }
    };

    export default reducers;
