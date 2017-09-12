import React, { Component } from 'react';
import {addNavigationHelpers, StackNavigator } from 'react-navigation';
import  {AuthContainer, PlayerContainer, Home} from './../modules';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Player} from './../modules/player/component';

export const AppNavigator = StackNavigator({
  Auth: {screen: AuthContainer},
  // Eula: {
  //   screen: EulaWebView,
  //   navigationOptions: {
  //     title: 'Eula',
  // }},
  Home: {screen: Home},
  Player: {screen: PlayerContainer},
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
