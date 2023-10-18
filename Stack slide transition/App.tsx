// App.js
import React from 'react';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenC from './ScreenC';
import ScreenD from './ScreenD';

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ScreenA"
        screenOptions={{
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      >
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenC" component={ScreenC} />
        <Stack.Screen name="ScreenD" component={ScreenD} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



