import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import DashboardScreen from './Screen/DashboardScreen';
import RequestDetails from './Screen/RequestDetails';
import UserProfileScreen from './Screen/UserProfileScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
                <Stack.Screen name='RequestDetails' component={RequestDetails} options={{ headerShown: false }} />
                <Stack.Screen name='UserProfile' component={UserProfileScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;