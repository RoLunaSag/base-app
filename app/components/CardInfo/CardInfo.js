import React from "react"; // useState // useEffect,
import { Image, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./CardInfoStyle";
import { Divider, Text } from "react-native-elements";

/**
 * Componente que le da forma a una carta de informacion
 *
 * @export
 * @param {*} props title, text1, text2, text3, text4
 * @return {*} 
 */
export default function CardInfo(props) {
	return (
		<View style={styles.container}>{!props.develop ? (
			<View style={styles.bodycard}>
				<View style={styles.alignSelfCenter}>
					<Image
						style={styles.imghead}
						resizeMode={"stretch"}
						source={props.source}
					/>
				</View>
				<View style={[styles.alignItemsCenter]}>
					<View
						style={[
							styles.row,
							styles.justifyContentSpaceBetween,
							{ width: 120 },
						]}
					>
						<Divider
							orientation="horizontal"
							color={"white"}
							width={3}
							style={{ width: 50 }}
						/>
						<View style={styles.point} />
						<Divider
							orientation="horizontal"
							color={"white"}
							width={3}
							style={{ width: 50 }}
						/>
					</View>
				</View>

				<View
					style={[
						styles.alignItemsCenter,
						styles.smallVerticalMargin,
					]}
				>
					<Text h1 h1Style={styles.titletext}>
						{props.title}
					</Text>
				</View>
				<View>
					{props.text}
				</View>
			</View>
		) : (
			<View style={styles.bodycard2}>
				<View style={[styles.alignSelfCenter, styles.baseVerticalMargin]}>
					{props.image}
				</View>
				<View style={[styles.centerObjects, styles.justifyContentSpaceBetween, styles.baseVerticalMargin]}>
					<View style={styles.tinyVerticalMargin}>
					<Text style={{ fontWeight: 'bold', fontSize: 20, color: '#FFF'}}>{props.name}</Text>
					</View>
					<View style={styles.tinyVerticalMargin}>
					<Text style={{ fontSize: 18, color: '#FFF'}}>{props.position}</Text>
					</View>
				</View>
			</View>
		)} 
		</View>
	);
}

CardInfo.propTypes = {
	// data: PropTypes.array
};

CardInfo.defaultProps = {
	name: 'Rodss',
	position: 'The Jotun'
};
