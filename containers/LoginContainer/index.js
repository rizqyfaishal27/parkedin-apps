import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TextInput } from '@shoutem/ui';
import Logo from '../../assets/logo.png';
import Heading from '../../components/Heading';

const LoginStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		padding: 30
	},
	title: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20
	},
	titleLogo: {
		height: 100,
		width: 70
	},
	formField: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	}
})



export default class LoginContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			text: ''
		}

		this.onInputChange = this.onInputChange.bind(this);
	}

	componentWillMount() {
		
	}

	onInputChange(value) {
		this.state({
			text: value
		})
	}

	render() {
		return (
			<View style={ LoginStyle.container }>
				<View style={ LoginStyle.title }>
					<Image source={Logo} style={LoginStyle.titleLogo}/>
					<Heading>Parkedin</Heading>
				</View>
				<View style={LoginStyle.formField}>
					<TextInput style={{ flex: 1, flexDirection: 'column' }} placeholder="Email" onChangeText={this.onInputChange} />
				</View>
			</View>
		)
	}
}