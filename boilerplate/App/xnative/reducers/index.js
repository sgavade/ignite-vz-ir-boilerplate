import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import {AppNavigator} from './../navigation';
//import {authReducer,playerReducers} from './../../../reactive-core';
import {playerReducers} from './../../../reactive-core';
import authReducer from './../../../reactive-core/modules/auth';


// Start with two routes: The Dashboard screen, with the Login screen on top.
const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Auth'));

const navReducer = (state = initialNavState, action) => {
    let nextState;
    switch(action.type) {
        case 'Home':
            console.log("Home reducer called");
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName:'Home'}), state);
            break;
        case 'Player':
            console.log("Player reducer called");
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName:'Player'}), state);
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
    }
    return nextState || state;
};

export const appReducers = combineReducers({
    nav:navReducer,
    authenticateUser:authReducer,
    playerReducers:playerReducers
});
