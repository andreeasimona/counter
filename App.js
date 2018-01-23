import React from 'react';
import { Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { styles } from './style.js';
import { Button, Divider } from 'react-native-elements';

// Define action types
const types = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

// Define a reducer
const reducer = (state, action) => {
    if (action.type === types.INCREMENT) {
        return { count: state.count + 1 }
    }
    if (action.type === types.DECREMENT) {
        return { count: state.count - 1 }
    }
    return state
}

// Define the initial state of our store
const initialState = { count: 0 }

// Create a store, passing our reducer function and our initial state
const store = createStore(reducer, initialState)

/// We're done! Redux is all set up. Here's how we can use it:

// Now we can dispatch actions, which are understood by our store/reducer
store.dispatch({ type: types.INCREMENT })
store.dispatch({ type: types.DECREMENT })

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: store.getState().count,
        }
        this.onHandlerDecrease = this.onHandlerDecrease.bind(this);
        this.onHandlerIncrease = this.onHandlerIncrease.bind(this);
    }

    onHandlerDecrease() {
        store.dispatch({ type: 'DECREMENT' });
        this.setState({ count: store.getState().count });
    }
    onHandlerIncrease() {
        store.dispatch({ type: 'INCREMENT' });
        this.setState({ count: store.getState().count });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.displayedText}>{this.state.count}</Text>
                <Button title="Increase counter"
                    onPress={this.onHandlerIncrease}
                    iconRight={{ name: 'plus-one' }}
                    rounded={true}
                    backgroundColor={'#3399ff'} />
                <Divider style={{ height: 10 }} />
                <Button title="Decrease counter -1"
                    onPress={this.onHandlerDecrease}
                    rounded={true}
                    backgroundColor={'#00cc00'} />
            </View>
        );
    }
}
