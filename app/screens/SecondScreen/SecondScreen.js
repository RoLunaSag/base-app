import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "./SecondScreenStyle";

import { size, isEmpty } from "lodash";
import { Input, Button, Slider, Icon } from "react-native-elements";

import BackgroundApp from "../../components/BackgroundApp";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import TechnicalProblems from '../../components/TechnicalProblems';

export default function SecondScreen(props) {
	const [formData, setFormData] = useState(defaultFormValue());
	const [modalVisible, setModalVisible] = useState(false);
	const [typealert, setTypeAlert] = useState("");

	const onChange = (e, type) => {
		setFormData({ ...formData, [type]: e.nativeEvent.text });
	};

	const onPressHandle = () => {
		if (isEmpty(formData.nombre) || isEmpty(formData.apellidos)) {
			setModalVisible(true)
			setTypeAlert('No has escrito nada, por favor llena todos los campos')
		} else if (size(formData.nombre) < 5) {
			setModalVisible(true)
			setTypeAlert("El nombre debe tener minimo 5 caracteres");
		} else {
			props.navigation.navigate("PhoneNumberScreen",{formData: formData})
			console.log(formData);
		}
	};

	const closeAlert = () => {
		setModalVisible(false)
	}

	function defaultFormValue() {
		return {
			nombre: "",
			apellidos: "",
			numero: "",
		};
	}
	const renderIcon = () => {
		return (
			<Icon
				iconStyle={{ marginRight: 10 }}
				type={"font-awesome"}
				name="lock"
				size={20}
				color={"#666666"}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<BackgroundApp /><TechnicalProblems textalert={typealert} exitmodal={closeAlert} visible={modalVisible} />
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
					<View style={styles.alignItemsCenter}>
						<View
							style={[
								styles.row,
								{ width: 200 },
								styles.justifyContentSpaceBetween,
							]}
						>
							<Image
								style={{ height: 40, width: 40 }}
								resizeMode={"stretch"}
								source={require("../../../assets/PaqueteAtomic/Group4014.png")}
							/>
							<MaterialCommunityIcons
								name="numeric-2-circle-outline"
								size={40}
								color="#666666"
							/>
						</View>
						<View style={{ width: 280 }}>
							<Slider
								value={40}
								disabled={true}
								maximumValue={100}
								maximumTrackTintColor={"#FFFFFF"}
								minimumValue={0}
								minimumTrackTintColor={"#EC480C"}
								step={1}
								trackStyle={{
									height: 10,
									backgroundColor: "transparent",
								}}
								thumbStyle={{
									height: 20,
									width: 20,
									backgroundColor: "transparent",
								}}
							/>
						</View>
					</View>
					<View
						style={[
							styles.row,
							styles.alignItemsCenter,
							styles.responsiveMargin,
						]}
					>
						<Image
							style={{ height: 50, width: 50 }}
							resizeMode={"stretch"}
							source={require("../../../assets/PaqueteAtomic/Group4014.png")}
						/>
						<View>
							<View style={styles.baseHorizontalMargin}>
								<Text style={styles.textW}>
									{"TE QUEREMOS"}
								</Text>
								<Text style={styles.textN}>{"CONOCER"}</Text>
							</View>
						</View>
					</View>

					<View
						style={[
							styles.baseHorizontalMargin,
							styles.baseVerticalMargin,
						]}
					>
						<Text style={styles.textB}>
							{
								"Queremos saber que eres tú, por favor ingresa los siguientes datos:"
							}
						</Text>
					</View>
					<View style={[styles.bodyframe]}>
						<Input
							label={"Nombre(s)"}
							labelStyle={styles.textB}
							inputContainerStyle={styles.bodyInput}
							onChange={(e) => onChange(e, "nombre")}
							rightIcon={renderIcon}
						/>
						<Input
							label={"Apellidos"}
							labelStyle={styles.textB}
							inputContainerStyle={styles.bodyInput}
							onChange={(e) => onChange(e, "apellidos")}
							rightIcon={renderIcon}
						/>
						<View style={[styles.baseVerticalMargin ,styles.alignItemsCenter]}>
							<Button
								buttonStyle={styles.button}
								titleStyle={styles.buttontext}
								title={"Enviar"}
								onPress={onPressHandle}
							/>
							<View style={styles.baseVerticalMargin}>
								<Image
									style={styles.sizeAstro}
									resizeMode={"stretch"}
									source={require("../../../assets/PaqueteAtomic/Group4033.png")}
								/>
							</View>
						</View>
					</View>
					<View style={[styles.alignItemsCenter, styles.bodybuttom]}>
						<View style={[styles.baseVerticalMargin, styles.row, styles.alignItemsCenter]}>
						<AntDesign name="copyright" size={10} color="white" />
							<Text style={styles.tintext}>{'  2020 AtomicLabs. Todos los derechos reservados'}</Text>
						</View>
						<View style={styles.baseVerticalMargin}>
							<Text style={[styles.tintext, {textDecorationLine: 'underline'}]}>{'Aviso de privacidad'}</Text>
						</View>
						<View style={[styles.row, styles.justifyContentSpaceBetween, styles.smallVerticalMargin, {width:60}]}>
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
