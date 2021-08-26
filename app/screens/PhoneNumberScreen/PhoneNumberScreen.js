import React, { useEffect,  useState } from 'react';
import { Text, View, Image } from "react-native";
import styles from './PhoneNumberScreenStyle';
import { size, isEmpty } from "lodash";
import { Input, Button, Icon } from "react-native-elements";
import { saveForm } from "../../services/ApiService";
import BackgroundApp from "../../components/BackgroundApp";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import TechnicalProblems from '../../components/TechnicalProblems';

export default function PhoneNumberScreen (props) {

	const [formData, setFormData] = useState(props.navigation.getParam('formData'));
	const [modalVisible, setModalVisible] = useState(false);
	const [typealert, setTypeAlert] = useState("");
	

	const onSubmit = () => {
		if (isEmpty(formData.numero)) {
			setModalVisible(true)
			setTypeAlert('No has escrito nada, por favor ingresa tu numero antes de continuar')
		} else if (size(formData.numero) < 10) {
			setModalVisible(true)
			setTypeAlert('El numero debe tener 10 digitos')
		} else {
			saveForm({ ...formData })
			props.navigation.navigate("CongratScreen",{formData: formData})
			console.log(formData);
		}
	};

	const onChange = (e, type) => {
		setFormData({ ...formData, [type]: e.nativeEvent.text });
	};

	const closeAlert = () => {
		setModalVisible(false)
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
							source={require("../../../assets/PaqueteAtomic/Group4016.png")}
						/>
						<Image
							style={{ height: 40, width: 40 }}
							resizeMode={"stretch"}
							source={require("../../../assets/PaqueteAtomic/Group4020.png")}
						/>
					</View>
					<View style={{ width: 280 }}>
						<View style={[styles.divider, styles.smallVerticalMargin]}/>
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
						source={require("../../../assets/PaqueteAtomic/Group4023.png")}
					/>
					<View>
						<View style={styles.baseHorizontalMargin}>
							<Text style={styles.textW}>
								{"VALIDAR TU"}
							</Text>
							<Text style={styles.textN}>{"CELULAR"}</Text>
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
							"Necesitamos validar tu número para continuar"
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
							"Ingresa tu número a 10 digitos y te enviaremos un código SMS."
						}
					</Text>
				</View>
				<View style={[styles.bodyframe]}>
					<Input
						keyboardType={"numeric"}
						maxLength={10}
						label={"Número de Celular"}
						labelStyle={styles.textB}
						inputContainerStyle={styles.bodyInput}
						onChange={(e) => onChange(e, "numero")}
						rightIcon={renderIcon}
					/>
					<View style={[styles.baseVerticalMargin ,styles.alignItemsCenter]}>
						<Button
							buttonStyle={styles.button}
							titleStyle={styles.buttontext}
							title={"Continuar"}
							onPress={onSubmit}
						/>
						<View style={styles.baseVerticalMargin}>
							<Image
								style={styles.sizeAstro}
								resizeMode={"stretch"}
								source={require("../../../assets/PaqueteAtomic/Group4034.png")}
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




