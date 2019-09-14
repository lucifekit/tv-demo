import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import {MaterialIcons} from '@expo/vector-icons';
import * as Font from 'expo-font';
import {
	LoadingScreen} from './screens';
const MainStack = StackNavigator({
	Loading:{screen:LoadingScreen}
},{
	initialRouteName:'Loading',
	navigationOptions:{
		headerStyle:{
			backgroundColor:'rgba(0,0,0,0)',
			display:'none'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
		  fontWeight: 'bold',
		},
		gesturesEnabled: false
	},
	swipeEnabled:false,
	animationEnabled:false,
	transitionConfig:()=>({
		transitionSpec:{duration:0}
	})
});
const RootStack = StackNavigator({
	Main:{screen:MainStack}
},{
	mode:'modal',
	headerMode:'none'
});
export default class App extends React.Component{
	componentDidMount(){
		
	}
	render(){
		console.log('render...');
		return <MainStack/>;
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
