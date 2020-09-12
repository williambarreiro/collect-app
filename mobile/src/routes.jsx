import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Point from './pages/Point';
import Table from './pages/Table';

const AppStack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{cardStyle: {backgroundColor: '#d3dceb'}}}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Point" component={Point} />
                <AppStack.Screen name="Table" component={Table} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
