import {View,Text} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "../screens/HomePage"
import HostPage from '../screens/HostPage';
import AudiencePage from '../screens/AudiencePage';

const Stack = createNativeStackNavigator()
const StackPage =()=> {
    return (
        <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen options={{headerShown: false}} headerMode="none" name="HomePage" component={HomePage} />
        <Stack.Screen options={{headerShown: false}} name="HostPage" component={HostPage} />
        <Stack.Screen options={{headerShown: false}} name="AudiencePage" component={AudiencePage} />
    </Stack.Navigator>
    )
}
export default StackPage;