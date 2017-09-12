import {fork} from 'redux-saga/effects';
import {
    authSagas,
    PlayerActionCreator,
    PlayerView,
    playerReducers,
    INITIALIZE_PLAYER,
    INITIALIZE_PLAYER_SUCCESS,
    INITIALIZE_PLAYER_FAILURE,
    PLAYER_START,
    PLAYER_START_SUCCESS,
    PLAYER_START_FAILURE,
    CLOSE_PLAYER,
    CLOSE_PLAYER_SUCCESS,
    CLOSE_PLAYER_FAILURE,
    PlayerVideoStates,
    watchSubscribePlayerNotifications,
} from './modules';

const sagaWatchers =  function* sagaWatchers() {
    yield [
        fork(authSagas.watchAuthenticateUser),
        fork(watchSubscribePlayerNotifications),
    ]
}

export {
    sagaWatchers,
    playerReducers,
    INITIALIZE_PLAYER,
    INITIALIZE_PLAYER_SUCCESS,
    INITIALIZE_PLAYER_FAILURE,
    PLAYER_START,
    PLAYER_START_SUCCESS,
    PLAYER_START_FAILURE,
    CLOSE_PLAYER,
    CLOSE_PLAYER_SUCCESS,
    CLOSE_PLAYER_FAILURE,
    PlayerActionCreator,
    PlayerView,
    PlayerVideoStates
};
