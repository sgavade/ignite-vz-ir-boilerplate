import React, {Component} from 'react';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import {AppWithNavigationState} from './navigation';
import createSagaMiddleware from 'redux-saga';
import {sagaWatchers} from './../reactive-core';
import {appReducers} from './reducers';

console.disableYellowBox = true;

// middleware that logs actions
const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const enhancer = compose(
        applyMiddleware(
            sagaMiddleware,
            loggerMiddleware
        ),
    );
    const appStore =  createStore(appReducers, enhancer);
    sagaMiddleware.run(sagaWatchers);
    return appStore;
};



class App extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true; // disabling warnings
    }

    appStore = configureStore();
    render() {
        return (
            <Provider store={this.appStore} >
                <AppWithNavigationState />
            </Provider>
        );
    }
};

export default App;
