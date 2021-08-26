import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'base-app/app/styles';
import { ApplicationStyles } from 'base-app/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	bodycard: {
		marginVertical: Metrics.smallMargin,
		padding: Metrics.smallMargin,
		backgroundColor: Colors.orange,
		shadowColor: "#000",
		shadowRadius: 4,
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 3 },
		elevation: 1,
		borderRadius: 10,
		width: 300
	},
	imghead:{
		width: Metrics.screenWidth * 0.50,
		height: Metrics.screenWidth * 0.50
	},
	point: {
		borderRadius: 50,
		backgroundColor: Colors.white,
		width: 8,
		height: 3
	},
	point2:{
		borderRadius: 50,
		backgroundColor: Colors.white,
		width: 8,
		height: 8
	},
	titletext: {
		color: Colors.white,
	},
	textbody: {
		color: Colors.white,
		fontSize: Fonts.size.subtitle
	},
	bodytext: {
		marginLeft: 50 ,
		marginBottom: 30 ,
		height: 150,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	bodycard2:{
		marginVertical: Metrics.smallMargin,
		padding: Metrics.smallMargin,
		backgroundColor: Colors.highlight,
		shadowColor: "#000",
		shadowRadius: 4,
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 3 },
		elevation: 1,
		borderRadius: 10,
		width: 300
	}
});
