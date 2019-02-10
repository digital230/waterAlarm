import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import App from '../App';

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: App,
    navigationOptions: ({n}) => ({
      title: 'Home',

    })
  }
});

export default createAppContainer(AppNavigator);
