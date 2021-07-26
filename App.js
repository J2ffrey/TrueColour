/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'

// import homeScreen from './src/home';
// import userScreen from './src/user';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';


// import PropsChild from './PropsChild';
// import Header from './src/header'; 


const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {

    let iconName, iconSize;

    if (name === 'Home') {
      iconName = 'ios-color-palette-outline'    
    } else if (name === 'User') {
      iconName = 'color-filter-outline'
    }

  iconSize = focused ? 30: 20
    return (
      <Ionicons
        name = {iconName}
        size={iconSize}
        />
    )
  }


class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarLabel: route.name,
            tabBarIcon: ({focused}) =>(
              TabBarIcon(focused, route.name) 
            )
            })}
        > 
          <Tab.Screen name="Home" component={TabHomeScreen} />
          <Tab.Screen name="User" component={TabUserScreen} />
        </Tab.Navigator>
      </NavigationContainer>

 
      //   <NavigationContainer>
      //   <Stack.Navigator initialRouteName="Home">
      //     <Stack.Screen 
      //       name="Home" 
      //       component={homeScreen}
      //       options={{    
      //         title:'TureColourApp',
      //         headerRight: ()=> (
      //           <Button
      //             title="Information"
      //             onPress={()=>alert('check info')}
      //           />
      //         )
            
      //       }}
      //     /> 
      //     <Stack.Screen 
      //       name="User" 
      //       component={userScreen}
      //       initialParams={{
      //         userIdx: 50,
      //         userName: 'Changwoo',
      //         userLastName: 'LEE'
      //       }}
      //       /> 

      //   </Stack.Navigator>
      // </NavigationContainer>
    )
  }

  // state 는 직접 변경하면 안됨 , setSate를 써야함 
  // state = {
  //   sampleText: 'aaaaaaaaaaaaaaaaaaaaaasasasasasasasasa', 
  //   samplebollean: false,
  //   sampleNum: 1
  // }
  
  // inputText = () => (

  //   this.state.samplebollean ?
  //   <Text> it is ture asdfasdf</Text>
  //   :
  //   <Text> it is falsesfasdfadsfasdf</Text>
  // )

  // changeState = () => {

  //   this.setState({
  //     sampleText: "slkfaskdfjaldksjfakldfjkdsafjaklsdjfalksdjfalkdsfj"
  //   })
  // }

  // onAdd = () => {
  //   this.setState(prevState => {
  //     return {
  //       sampleNum: prevState.sampleNum + 1 
  //     }
  //   })
  // }


}

 const styles = StyleSheet.create({

   Mainview: {
    flex: 1, // 화면을 채우는 컴포넌트 간의 비율 지금은 하나니까 전체를 차지 
    backgroundColor: 'orange',
    paddingTop:50, 
    alignItems: 'center',
    justifyContent: 'center'
   },

   background: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center'
   }
 })
export default App;
