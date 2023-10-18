// ScreenA.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ScreenD = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Screen C</Text>
            <Button
                title="Go to Screen A"
                onPress={() => navigation.navigate('ScreenA')}
            />
        </View>
    );
};

export default ScreenD;
