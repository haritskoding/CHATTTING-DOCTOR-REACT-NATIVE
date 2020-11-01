import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { GetStarted, Splash, Register, Login, UploadFoto, Doctor, Messages, Hospitals } from '../pages';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Doctor" component={Doctor} />
            <Tab.Screen name="Messages" component={Messages} />
            <Tab.Screen name="Hospitals" component={Hospitals} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        //initialRouteName="namaKomponen"
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GetStarted"
                component={GetStarted}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UploadFoto"
                component={UploadFoto}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Router;