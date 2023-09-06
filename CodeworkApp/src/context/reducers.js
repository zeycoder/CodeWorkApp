const reducers = (state, action) => {
    switch (action.type) {
        case 'ADD_JOB':
            console.log('aaaaa')
            return {...state,favoriteJobList:[...state.favoriteJobList,action.payload.favoriteJob]}
        default:
            return state;
    }
};

export default reducers;
