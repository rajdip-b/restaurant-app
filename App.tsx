import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TRootStackParamList } from './types';
import appColors from './src/utils/app-colors';
import DishesList from './src/screens/DishesList';
import DishDetails from './src/screens/DishDetails';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <RootStack />
        </NavigationContainer>
    );
}

const RootStack: React.FC = () => {
    const Stack = createNativeStackNavigator<TRootStackParamList>();

    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: {
                    backgroundColor: appColors.lightGray,
                },
                headerStyle: {
                    backgroundColor: appColors.lightGray,
                },
                headerTitleAlign: 'center',
                headerTintColor: appColors.darkGray,
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen
                name={'DishesList'}
                component={DishesList}
                options={{
                    headerTitle: 'Dishes',
                }}
            />
            <Stack.Screen
                name={'DishDetails'}
                component={DishDetails}
                options={{
                    headerTitle: 'Dish Details',
                }}
            />
        </Stack.Navigator>
    );
};
