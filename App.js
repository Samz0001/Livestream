import {View,Text} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackPage from './src/routes/StackPage';

const App =()=> {
    return (
    <NavigationContainer>
        <StackPage/>
    </NavigationContainer>
    )
}