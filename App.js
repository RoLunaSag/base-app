import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from 'base-app/app/Store.js';
import NavigationService from 'base-app/app/services/NavigationService.js';
import 'base-app/config/ReactotronConfig'

import AppNavigator from './app/Router';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<AppNavigator ref={
						navigatorRef => {
							NavigationService.setTopLevelNavigator(navigatorRef);
						}}
					/>
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
