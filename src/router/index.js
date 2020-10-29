import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { GetStarted, Splash } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        //initialRouteName="namaKomponen"
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash"
                component={Splash}
                option={{ headerShown: false }}
            />
            <Stack.Screen
                name="GetStarted"
                component={GetStarted}
                option={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                option={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                option={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Router;