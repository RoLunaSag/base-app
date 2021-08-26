import { StyleSheet } from 'react-native';
import { Metrics } from 'base-app/app/styles';
import { ApplicationStyles } from 'base-app/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	imagebody: {
		width: Metrics.colosalWidht,
		height: Metrics.colosalWidht * 0.7,
		marginLeft: -70,
		// transform: [{ scaleX: 1 }],
		// transform: [{ rotate: "-90deg" }, { scaleX: -1 }],
	},
});
