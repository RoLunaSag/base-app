import React, {useEffect, useState } from"react";
import { Text, View } from "react-native";
import styles from "./SecondScreenStyle";

import { size, isEmpty } from "lodash";
import { Input, Button } from "react-native-elements";

export default function SecondScreen(props) {
	const [formData, setFormData] = useState(defaultFormValue());

	const onSubmit = () => {
		if (isEmpty(formData.nombre) || isEmpty(formData.apellidos)) {
			alert("Todos los campos son obligatorios");
		} else if (size(formData.nombre) < 5) {
			alert("El nombre debe tener minimo 5 caracteres");
		} else {
			saveForm({ ...formData });
			console.log("listo para enviar");
		}
	};

	const onChange = (e, type) => {
		setFormData({ ...formData, [type]: e.nativeEvent.text });
	};

	function defaultFormValue() {
		return {
			nombre: "",
			apellidos: "",
			numero: "",
		};
	}

	return (
		<View style={styles.container}>
			<View style={[styles.card, styles.bodyframe]}>
				<Input
					placeholder="NOMBRE(S)"
					onChange={(e) => onChange(e, "nombre")}
				/>
				<Input
					placeholder="APELLIDOS"
					onChange={(e) => onChange(e, "apellidos")}
				/>
				<Button title={"Subir"} onPress={onSubmit} />
			</View>
		</View>
	);
}
