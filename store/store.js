import { createStore } from 'redux';
import actionTypes from './actionTypes.js';
import reducer from './reducer.js';;

// Define the initial state of our store
const initialState = { count: 0 }

// Create a store, passing our reducer function and our initial state
const store = createStore(reducer, initialState)

module.exports = store;