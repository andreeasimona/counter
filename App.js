import React from 'react';
import { Text, View } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import { styles } from './style/style.js';
import store from './store/store.js';
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
