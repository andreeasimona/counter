import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';

// Define action types
const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
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
store.dispatch({ type: types.INCREMENT })
store.dispatch({ type: types.INCREMENT })
store.dispatch({ type: types.DECREMENT })
export default class App extends React.Component {
  render() {
    onPressLearnMore = () => {
      this.store.dispatch({ type: types.INCREMENT });
    }

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text style={{ fontSize: 100 }}>
          {store.getState().count}
        </Text>
        <Button title="Increse counter"
          onPress={onPressLearnMore}
          color="#841584"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
