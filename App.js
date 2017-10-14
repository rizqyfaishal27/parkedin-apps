import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';
import './ReactotronConfig';
import Reactotron from 'reactotron-react-native';
import {
  Router,
  Scene,
  Stack,
  Actions
} from 'react-native-router-flux';

import SplashScreen from './containers/SplashScreenContainer';
import LoginContainer from './containers/LoginContainer';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="splashScreen" component={SplashScreen} title="Splash Screen" hideNavBar={true} />
          <Scene key="login" component={LoginContainer} title="Login" hideNavBar={true} />
        </Stack>
      </Router>
    );
  }
}
