import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'base-app/app/styles';
import { ApplicationStyles } from 'base-app/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	textW:{
		fontSize: Fonts.size.mega,
		fontWeight: Fonts.weight.rude,
		color: Colors.white,
		textAlign: 'center'
	},
	textN:{
		fontSize: Fonts.size.mega,
		fontWeight: Fonts.weight.rude,
		color: Colors.orange,
		textAlign: 'center'
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
		height: Metrics.screenHeight * 0.6
	},
	bodybuttom:{
		backgroundColor: Colors.black,
	},
	tintext:{
		color: Colors.white,
		fontSize: Fonts.size.tiny,
		textAlign: 'center'
	},
	divider:{
		backgroundColor: Colors.orange,
		width: 280,
		height: 12,
		borderRadius: 20
	}
});
