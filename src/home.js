/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component} from 'react';
import { View, Text, Button } from 'react-native';

class homeScreen extends Component { 
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text> True colour App Home </Text>
                {/* <Button 
                    title = "To User Screen"
                    onPress={()=>{
                        this.props.navigation.navigate("User")
                    }}
                    /> */}
            </View>
        )
    }
}

export default homeScreen;
