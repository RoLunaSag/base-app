// Use this file to create all app navigators.

import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// For each navigator, import its screens. Each screen may be used in many navigators
// To add more screens, run yo rng:g screen <screen-name>

import WelcomeScreen from "base-app/app/screens/WelcomeScreen";
import CongratScreen from "base-app/app/screens/CongratScreen";
import SecondScreen from "base-app/app/screens/SecondScreen";
import PhoneNumberScreen from "base-app/app/screens/PhoneNumberScreen";

// You might want to add some navigator options to your navigator.
// You can edit this options in app/serivices/navigatorOptions.jsx
// import { stackNavigatorOptions } from 'axioma-native/app/services/navigatorOptions';
import { ApplicationStyles } from "base-app/app/styles";

/** Este archivo es el Router de toda la aplicacion,
 * se pueden conectar componentes y vistas para darle un
 * formato mas estilizado y agil, en este caso el componente
 * header esta desactivado por default */

const StackScreenPackage = createSwitchNavigator({
	WelcomeScreen: {
		screen: WelcomeScreen,
	},
	CongratScreen: {
		screen: CongratScreen,
	},
	SecondScreen: {
		screen: SecondScreen,
	},
	PhoneNumberScreen: {
		screen: PhoneNumberScreen,
	},
	initialRouteName: "WelcomeScreen",
});

const AppNavigator = createStackNavigator(
	{
		StackScreenPackage,
	},
	{
		defaultNavigationOptions:{
			header: false
		}
	}
);

export default createAppContainer(AppNavigator);
