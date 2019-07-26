import React from "react";
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";

import Welcome from '../screens/Welcome';
// import Browse from '../screens/Browse';
// import Explore from '../screens/Explore';
// import Login from '../screens/Login';
// import Settings from '../screens/Settings';
// import Product from '../screens/Product';

import { theme } from '../constants';

const screens = createAppContainer({
    Welcome,
    // Browse,
    // Explore, 
    // Login,
    // Settings,
    // Product
}, {
    defaultNavigationOptions: {
        headerStyle: {},
        headerBackImage: <Image />,
        headerBackTitle: null,
        headerLeftContainerStyle: {},
        headerRightContainerStyle: {},
    }
});

export default createAppContainer(screens);