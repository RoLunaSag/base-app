import React from "react";
import { Image, View } from "react-native";
import styles from "./BackgroundAppStyle";

export default function BackgroundApp() {
	return (
		<View>
			<Image
				style={[styles.imagebody, styles.absolute]}
				resizeMode={"stretch"}
				source={require("../../../assets/PaqueteAtomic/MaskGroup1.png")}
			/>
		</View>
	);
}
