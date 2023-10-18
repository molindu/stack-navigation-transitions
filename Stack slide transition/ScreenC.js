// ScreenA.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ScreenC = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Screen C</Text>
            <Button
                title="Go to Screen C"
                onPress={() => navigation.navigate('ScreenD')}
            />
        </View>
    );
};

export default ScreenC;
