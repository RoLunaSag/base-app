import React, { useEffect, useState } from "react";
import styles from "./CongratScreenStyle";
import { Text, View, Image } from "react-native";
import BackgroundApp from "../../components/BackgroundApp";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

export default function CongratScreen(props) {
	return (
		<View style={styles.container}>
			<BackgroundApp />
			<View>
				<ScrollView>
					<View
						style={[
							styles.baseVerticalMargin,
							styles.alignItemsCenter,
						]}
					>
						<Image
							style={{ height: 50, width: 100 }}
							resizeMode={"stretch"}
							source={require("../../../assets/PaqueteAtomic/logoAtomicLabs.png")}
						/>
					</View>

					<View
						style={[
							styles.row,
							styles.centerObjects,
							styles.responsiveMargin,
						]}
					>
						<Text style={styles.textW}>
							{"TUS DATOS HAN SIDO"}
							<Text style={styles.textN}>
								{" ENVIADOS CON ÉXITO"}
							</Text>
						</Text>
					</View>

					<View
						style={[
							styles.baseHorizontalMargin,
							styles.baseVerticalMargin,
						]}
					>
						<Text style={styles.textB}>
							{
								"En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs."
							}
						</Text>
					</View>
					<View
						style={[
							styles.baseHorizontalMargin,
							styles.baseVerticalMargin,
						]}
					>
						<Text style={styles.textB}>
							{
								"Recuerda revisar tu bandeja de SPAM ¡Esperamos verte pronto!"
							}
						</Text>
					</View>
					<View
						style={[
							styles.baseVerticalMargin,
							styles.alignItemsCenter,
						]}
					>
						<Image
							style={styles.sizeAstro}
							resizeMode={"stretch"}
							source={require("../../../assets/PaqueteAtomic/Group4039.png")}
						/>
					</View>
					<View style={[styles.alignItemsCenter, styles.bodybuttom]}>
						<View
							style={[
								styles.baseVerticalMargin,
								styles.row,
								styles.alignItemsCenter,
							]}
						>
							<AntDesign
								name="copyright"
								size={10}
								color="white"
							/>
							<Text style={styles.tintext}>
								{
									"2020 AtomicLabs. Todos los derechos reservados"
								}
							</Text>
						</View>
						<View style={styles.baseVerticalMargin}>
							<Text
								style={[
									styles.tintext,
									{ textDecorationLine: "underline" },
								]}
							>
								{"Aviso de privacidad"}
							</Text>
						</View>
						<View
							style={[
								styles.row,
								styles.justifyContentSpaceBetween,
								styles.smallVerticalMargin,
								{ width: 60 },
							]}
						>
							<Image
								style={{ height: 20, width: 20 }}
								resizeMode={"stretch"}
								source={require("../../../assets/PaqueteAtomic/linkedin.png")}
							/>
							<Image
								style={{ height: 20, width: 20 }}
								resizeMode={"stretch"}
								source={require("../../../assets/PaqueteAtomic/twitter.png")}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
