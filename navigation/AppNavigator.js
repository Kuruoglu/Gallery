import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from "react-redux";
import configureStore from "../Redux/config";

import Main from "../screens/Main";
import Foto from "../screens/Foto";

const Stack = createStackNavigator();

const AppNavigator = () => {
    const [store] = useState(configureStore());

    return(
        <Provider store={store}>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen
                    name='Main'
                    component={Main}
                >
                </Stack.Screen>
                <Stack.Screen
                    name="Foto"
                    component={Foto}
                >
                </Stack.Screen>
            </Stack.Navigator>
        </Provider>
    )
};

export default AppNavigator;
