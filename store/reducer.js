import actionTypes from './actionTypes.js';

// Define a reducer
const reducer = (state, action) => {
    if (action.type === actionTypes.INCREMENT) {
        return { count: state.count + 1 }
    }
    if (action.type === actionTypes.DECREMENT) {
        return { count: state.count - 1 }
    }
    return state
}

module.exports = reducer;
