import { StyleSheet } from "react-native";
import { Fonts, Colors, Metrics } from "base-app/app/styles";
import { ApplicationStyles } from "base-app/app/styles";
import { color } from "react-native-elements/dist/helpers";

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	title1: {
		color: Colors.white
	},
	title2: {
		color:Colors.orange
	},
	sizeAstro:{
		width: Metrics.screenWidth * 0.9,
		height: Metrics.screenHeight * 0.5
	},
	textbutton: {
		color: Colors.blue,
		fontSize: Fonts.size.title,
		fontWeight: Fonts.weight.bold,
		marginHorizontal: Metrics.baseMargin
	},
	buttonGo:{
		width: '60%',
		height: 50,
		backgroundColor: Colors.white,
		borderRadius: 15
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
	point3: {
		borderRadius: 50,
		backgroundColor: Colors.white,
		width: 10,
		height: 10
	},
	point4: {
		borderRadius: 50,
		backgroundColor: Colors.orange,
		width: 10,
		height: 10
	},
	peoplecenterimg:{
		width: Metrics.screenWidth * 0.9,
		height: Metrics.screenHeight * 0.2
	},
	tintext:{
		color: Colors.white,
		fontSize: Fonts.size.tiny,
		textAlign: 'center'
	},
	listdev:{
		backgroundColor: Colors.transparent
	},
	bodybuttom:{
		backgroundColor: Colors.black,
		
	}
});
