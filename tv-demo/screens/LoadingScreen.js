import React from 'react';
import { StyleSheet, Image, View ,StatusBar, AsyncStorage,Text} from 'react-native';

import Expo,{AppLoading,Updates} from 'expo';
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
const ERROR_CODE_TOKEN_INVALID = 13;
function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class LoadingScreen extends React.Component {
	static navigationOptions = {
		title: 'Detail',
		headerStyle:{
			backgroundColor:'rgba(0,0,0,0)',
			display:'none'
		}
    };
	state = {
		isReady:false,
		errorMessage:''
	}

	constructor(props){
		super(props);
		console.log("!!!!!!!APP START!!!!!!!!");
		
		Updates.addListener((evt)=>{
			if(evt.type==Updates.EventType.DOWNLOAD_FINISHED){
				Updates.reload();
			}
		});
	}
	render() {
		StatusBar.setHidden(true);
		if(!this.state.isReady){
			return (
				<AppLoading
					startAsync={()=>{}}
					onFinish={()=>this.setState({isReady:true})}
					onError={console.warn}
					/>
			);
		}else{

			return  (
				<View style={styles.container}>					
					<Text>Loading screen</Text>
				</View>
			);
		}
		
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	height:'100%',
	flexDirection:'column',
    backgroundColor: '#993333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorHandler:{
  	position:'absolute',
  	top:'50%',
  	marginTop:100,
  	flexDirection:'column',
  	justifyContent:'center',
  	alignItems:'center'
  },
  errorMessage:{
  	color:"#fff",
  	lineHeight:40,
  	marginBottom:5,
  }
});
