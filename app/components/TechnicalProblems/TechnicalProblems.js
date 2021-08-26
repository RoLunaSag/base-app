import React, { useEffect, useState } from "react";
import { View, Image, Modal, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./TechnicalProblemsStyle";
import { TouchableOpacity } from "react-native";

export default function TechnicalProblems(props) {
	return (
		<View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={props.visible}
			>
				<View style={[styles.bodyModal, styles.centeredView]}>
					<View style={styles.column}>
					<Text style={styles.titletxt}>{"¡UPSS!"}</Text>
						<Image
							style={{ height: 250, width: 250 }}
							resizeMode={"stretch"}
							source={require("../../../assets/technicaldifficulties.jpg")}
						/>
						<View style={styles.alignItemsCenter}>
							<View style={{width: 250}}>
							<Text style={styles.text}>{props.textalert}</Text>
							</View>
							<TouchableOpacity activeOpacity={0.5}
							style={styles.buttonalert}
							onPress={props.exitmodal}
							>
								<Text style={styles.text}>{"OK"}</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
}

TechnicalProblems.propTypes = {
	// data: PropTypes.array
};

TechnicalProblems.defaultProps = {
	// data: []
};
