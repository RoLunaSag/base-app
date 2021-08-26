import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'base-app/app/styles';
import { ApplicationStyles } from 'base-app/app/styles';

export default StyleSheet.create({
	 ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	textW:{
		fontSize: Fonts.size.mega,
		fontWeight: Fonts.weight.bold,
		color: Colors.white
	},
	textN:{
		fontSize: Fonts.size.mega,
		fontWeight: Fonts.weight.bold,
		color: Colors.orange
	},
	textB:{
		fontSize: Fonts.size.title,
		fontWeight: Fonts.weight.regular,
		color: Colors.white
	},
	bodyInput: {
		backgroundColor: Colors.white,
		borderRadius: 5,
		paddingLeft: 10
	},
	button:{
		backgroundColor: Colors.orange,
		width: 200,
		borderRadius: 50,
	},
	buttontext:{
		fontSize: Fonts.size.title
	},
	sizeAstro:{
		width: Metrics.screenWidth * 0.9,
		height: Metrics.screenHeight * 0.8
	},
	bodybuttom:{
		backgroundColor: Colors.black,
	},
	tintext:{
		color: Colors.white,
		fontSize: Fonts.size.tiny,
		textAlign: 'center'
	}
});
