import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export const HeadingStyle = StyleSheet.create({
	heading: {
		fontSize: 36,
		margin: 8,
		fontWeight: 'bold',
	}
});

export default class Heading extends Component {
	render() {
		return (
			<Text style={ HeadingStyle.heading }>{this.props.children}</Text>
		)
	}
}