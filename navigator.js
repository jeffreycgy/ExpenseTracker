import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/home';
import { store } from './store';
import { Provider } from 'react-redux';
import ExpenseFormScreen from './app/screens/expenseForm';
import colors from './app/config/colors';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Expense Tracker',
              headerTintColor: colors.light,
              headerStyle: { backgroundColor: colors.dark },
            }}
          />
          <Stack.Screen
            name="ExpenseForm"
            component={ExpenseFormScreen}
            options={{
              title: 'New Expense',
              headerTintColor: colors.light,
              headerStyle: { backgroundColor: colors.dark },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigator;
