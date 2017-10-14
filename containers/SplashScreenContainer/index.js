import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Heading from '../../components/Heading';
import Logo from '../../assets/logo.png';


export const SplashScreenStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	}
});

export default class SplashScreenContainer extends Component {


	componentDidMount() {
		setTimeout(() => Actions.reset('login'), 3000);
	}


	render() {
		return (
			<View style={SplashScreenStyle.container}>
				<Image source={Logo} />
				<Heading>Parkedin</Heading>
			</View>
		)
	}
}