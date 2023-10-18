// AppStack.js
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ScreenA from './ScreenA';
import ScreenC from './ScreenC';

const AppStack = createStackNavigator(
    {
        ScreenA: ScreenA,
        ScreenC: ScreenC,
    },
    {
        initialRouteName: 'ScreenA',
        defaultNavigationOptions: {
            ...TransitionPresets.SlideFromRightIOS, 
        },
    }
);

export default createAppContainer(AppStack);
