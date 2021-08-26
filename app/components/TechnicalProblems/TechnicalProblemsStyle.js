import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'base-app/app/styles';
import { ApplicationStyles } from 'base-app/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	// ...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
	bodyModal:{
		backgroundColor: Colors.yellow,
		borderRadius: 10,
	},
	centeredView: {
		position: 'absolute',
		width: '90%',
		height:'90%',
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center"
	  },
	  text: {
		fontSize: Fonts.size.title,
		fontWeight: Fonts.weight.regular,
		color: Colors.white,
		textAlign: 'center'
	  },
	  buttonalert: {
		  marginVertical: 20,
		  backgroundColor: Colors.orange,
		  borderRadius: 10,
		  width: 100,
		  height: 50,
		  alignItems: 'center',
		  justifyContent: 'center',
		  alignSelf:'center'
	  },
	  titletxt:{
		fontSize: Fonts.size.ultra * 2,
		fontWeight: Fonts.weight.bold,
		color: Colors.white,
		textAlign: 'center'
	  }
});
