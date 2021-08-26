import React, { useEffect, useState, useRef } from "react";
import {
	View,
	ScrollView,
	Image,
	TouchableOpacity,
	Text as TextRN,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import BackgroundApp from "../../components/BackgroundApp";
import { getPeople } from "../../services/ApiService";
import styles from "./WelcomeScreenStyle";
import { Avatar, Text } from "react-native-elements";
import CardInfo from "../../components/CardInfo";
import { AntDesign } from '@expo/vector-icons';

export default function WelcomeScreen(props) {
	const [people, setPeople] = useState([]);
	const scrollRef = useRef(); 

	useEffect(() => {
		async function loadPeople() {
			const response = await getPeople();
			if (response.status === 200) {
				setPeople(response.data);
				console.log(people);
			} else {
				alert("Error al cargar los datos de personal");
			}
		}
		loadPeople();
	}, []);

	const onPressTouch = () => {
        scrollRef.current.scrollTo({
			x: 0,
            y: 0,
            animated: true,
        });
		console.log('bajar')
 }

	return (
		<View style={[styles.fill]}>
			<BackgroundApp />
			{/* Cuerpo de la aplicacion */}
			<View style={[styles.container]}>
			<ScrollView ref={scrollRef}>
					<View style={[styles.alignItemsCenter]}>
						<View style={styles.baseVerticalMargin}>
							<Image
								style={{ height: 50, width: 100 }}
								resizeMode={"stretch"}
								source={require("../../../assets/PaqueteAtomic/logoAtomicLabs.png")}
							/>
						</View>
						<View style={[styles.alignItemsCenter]}>
							<Text h2 h2Style={styles.title1}>
								{"Desarrolla todo"}
							</Text>
							<Text h1 h1Style={styles.title2}>
								{"tu POTENCIAL"}
							</Text>
							<Text h2 h2Style={styles.title1}>
								{"dentro del equipo"}
							</Text>
							<Text h1 h1Style={styles.title2}>
								{"ATOMIC"}
								<Text h1 h1Style={styles.title1}>
									{"LABS"}
								</Text>
							</Text>
						</View>
						<View>
							<TouchableOpacity
								style={[
									styles.alignItemsCenter,
									styles.doubleVerticalMargin,
								]}
								activeOpacity={0.5}
								onPress={onPressTouch}
							>
								<Image
									style={{ height: 50, width: 50 }}
									resizeMode={"stretch"}
									source={require("../../../assets/PaqueteAtomic/Group4013.png")}
								/>
								<Text h4 h4Style={styles.title1}>
									{"Quiero saber más"}
								</Text>
							</TouchableOpacity>
							
							<View style={styles.doubleVerticalMargin}>
								<Image
									style={styles.sizeAstro}
									resizeMode={"stretch"}
									source={require("../../../assets/PaqueteAtomic/Group4032.png")}
								/>
							</View>
							<View
								style={[
									styles.alignItemsCenter,
									styles.responsiveVerticalMargin,
								]}
							>
								<TouchableOpacity
									activeOpacity={0.5}
									onPress={() =>
										props.navigation.navigate(
											"SecondScreen"
										)
									}
								>
									<View
										style={[
											styles.buttonGo,
											styles.centerObjects,
										]}
									>
										<Text style={styles.textbutton}>
											{"¡Quiero ser parte!"}
										</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View
						style={[
							styles.alignItemsCenter,
							styles.doubleVerticalMargin,
						]}
					>
						<Text h1 h1Style={styles.title1}>
							{"SOMOS EL BRAZO"}
						</Text>
						<Text h1 h1Style={styles.title1}>
							{"DERECHO "}
							<Text h1 h1Style={styles.title2}>
								{"DE LA"}
							</Text>
						</Text>
						<Text h1 h1Style={styles.title2}>
							{"TECNOLOGÍA"}
						</Text>
					</View>

					<View>
						<ScrollView style={[styles.responsiveHorizontalMargin]} showsHorizontalScrollIndicator={false} horizontal={true} pagingEnabled={true}>
							<View
								style={[
									styles.smallHorizontalMargin,
									styles.alignItemsCenter,
								]}
							>
								<CardInfo
									source={require("../../../assets/PaqueteAtomic/Group4036.png")}
									title={"IMAGINA"}
									text={
										<View
											style={[
												styles.justifyContentSpaceBetween,
												styles.bodytext,
											]}
										>
											<View
												style={[
													styles.row,
													styles.alignItemsCenter,
												]}
											>
												<View
													style={[
														styles.point2,
														styles.RightMargin,
													]}
												/>
												<Text style={styles.textbody}>
													{"Estrategia Digital"}
												</Text>
											</View>
											<View
												style={[
													styles.row,
													styles.alignItemsCenter,
												]}
											>
												<View
													style={[
														styles.point2,
														styles.RightMargin,
													]}
												/>
												<Text style={styles.textbody}>
													{"Big Data & Analysis"}
												</Text>
											</View>
											<View
												style={[
													styles.row,
													styles.alignItemsCenter,
												]}
											>
												<View
													style={[
														styles.point2,
														styles.RightMargin,
													]}
												/>
												<Text style={styles.textbody}>
													{"Consultoría Tecnológica"}
												</Text>
											</View>
											<View
												style={[
													styles.row,
													styles.alignItemsCenter,
												]}
											>
												<View
													style={[
														styles.point2,
														styles.RightMargin,
													]}
												/>
												<Text style={styles.textbody}>
													{"Reducción de costos TI"}
												</Text>
											</View>
										</View>
									}
								/>
								<View
									style={[
										styles.row,
										styles.alignItemsCenter,
										styles.baseVerticalMargin,
									]}
								>
									<View
										style={[
											styles.smallHorizontalMargin,
											styles.point4,
										]}
									/>
									<View
										style={[
											styles.smallHorizontalMargin,
											styles.point3,
										]}
									/>
									<View
										style={[
											styles.smallHorizontalMargin,
											styles.point3,
										]}
									/>
								</View>
							</View>
							<View
								style={[
									styles.baseHorizontalMargin,
									styles.alignItemsCenter,
								]}
							>
								<CardInfo
									source={require("../../../assets/PaqueteAtomic/Group4035.png")}
									title={"EXPLORA"}
									text={
										<View
											style={[
												styles.justifyContentSpaceEvenly,
												styles.bodytext,
											]}
										>
											<View
												style={[
													styles.row,
													styles.alignItemsCenter,
												]}
											>
												<View
													style={[
														styles.point2,
														styles.RightMargin,
													]}
												/>
												<Text style={styles.textbody}>
													{
														"Innovación y creación \ntecnológica"
													}
												</Text>
											</View>
											<View
												style={[
													styles.row,
													styles.alignItemsCenter,
												]}
											>
												<View
													style={[
														styles.point2,
														styles.RightMargin,
													]}
												/>
												<Text style={styles.textbody}>
													{"UX / UI"}
												</Text>
											</View>
											<View
												style={[
													styles.row,
													styles.alignItemsCenter,
												]}
											>
												<View
													style={[
														styles.point2,
														styles.RightMargin,
													]}
												/>
												<Text style={styles.textbody}>
													{"Innovación"}
												</Text>
											</View>
										</View>
									}
								/>
								<View
									style={[
										styles.row,
										styles.alignItemsCenter,
										styles.baseVerticalMargin,
									]}
								>
									<View
										style={[
											styles.smallHorizontalMargin,
											styles.point3,
										]}
									/>
									<View
										style={[
											styles.smallHorizontalMargin,
											styles.point4,
										]}
									/>
									<View
										style={[
											styles.smallHorizontalMargin,
											styles.point3,
										]}
									/>
								</View>
							</View>
							<View
								style={[
									styles.baseHorizontalMargin,
									styles.alignItemsCenter,
								]}
							>
								<CardInfo
									source={require("../../../assets/PaqueteAtomic/Group4037.png")}
									title={"IMAGINA"}
									text={
										<View
											style={[
												styles.justifyContentSpaceEvenly,
												styles.bodytext,
											]}
										>
											<View
												style={[
													styles.row,
													styles.alignItemsCenter,
												]}
											>
												<View
													style={[
														styles.point2,
														styles.RightMargin,
													]}
												/>
												<Text style={styles.textbody}>
													{"Estrategia Digital"}
												</Text>
											</View>
											<View
												style={[
													styles.row,
													styles.alignItemsCenter,
												]}
											>
												<View
													style={[
														styles.point2,
														styles.RightMargin,
													]}
												/>
												<Text style={styles.textbody}>
													{"Big Data & Analysis"}
												</Text>
											</View>
											<View
												style={[
													styles.row,
													styles.alignItemsCenter,
												]}
											>
												<View
													style={[
														styles.point2,
														styles.RightMargin,
													]}
												/>
												<Text style={styles.textbody}>
													{"Consultoría Tecnológica"}
												</Text>
											</View>
										</View>
									}
								/>
								<View
									style={[
										styles.row,
										styles.alignItemsCenter,
										styles.baseVerticalMargin,
									]}
								>
									<View
										style={[
											styles.smallHorizontalMargin,
											styles.point3,
										]}
									/>
									<View
										style={[
											styles.smallHorizontalMargin,
											styles.point3,
										]}
									/>
									<View
										style={[
											styles.smallHorizontalMargin,
											styles.point4,
										]}
									/>
								</View>
							</View>
						</ScrollView>
					</View>

					<View style={[styles.alignItemsCenter]}>
						<View style={[styles.alignItemsCenter]}>
							<Text h1 h1Style={styles.title1}>
								{"TE ENCANTARÁ"}
							</Text>
							<Text h1 h1Style={styles.title2}>
								{"TRABAJAR CON"}
							</Text>
							<Text h1 h1Style={styles.title2}>
								{"NOSOTROS!"}
							</Text>
						</View>
						<View style={styles.column}>
							<Image
								style={styles.peoplecenterimg}
								resizeMode={"stretch"}
								source={require("../../../assets/PaqueteAtomic/Group4040.png")}
							/>
							<View
								style={[
									styles.row,
									styles.alignItemsCenter,
									styles.justifyContentSpaceBetween,
									styles.smallVerticalMargin,
								]}
							>
								<View style={[{ width: 70 }]}>
									<TextRN style={styles.tintext}>
										{"Contratacion Remota"}
									</TextRN>
								</View>
								<Entypo
									name="arrow-long-right"
									size={15}
									color="#EC480C"
								/>
								<View style={{ width: 70 }}>
									<TextRN style={styles.tintext}>
										{"Entrevista con el área de RH"}
									</TextRN>
								</View>
								<Entypo
									name="arrow-long-right"
									size={15}
									color="#EC480C"
								/>
								<View style={{ width: 70 }}>
									<TextRN style={styles.tintext}>
										{"Prueba práctica"}
									</TextRN>
								</View>
								<Entypo
									name="arrow-long-right"
									size={15}
									color="#EC480C"
								/>
								<View style={{ width: 70 }}>
									<TextRN style={styles.tintext}>
										{"Entrevista técnica"}
									</TextRN>
								</View>
							</View>
						</View>
					</View>
					<View
						style={[
							styles.alignItemsCenter,
							styles.doubleVerticalMargin,
						]}
					>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={() =>
								props.navigation.navigate("SecondScreen")
							}
						>
							<View
								style={[styles.buttonGo, styles.centerObjects]}
							>
								<Text style={styles.textbutton}>
									{"¡Quiero ser parte!"}
								</Text>
							</View>
						</TouchableOpacity>
					</View>

					<View>
						<View
							style={[
								styles.alignItemsCenter,
								styles.doubleVerticalMargin,
							]}
						>
							<Text h1 h1Style={styles.title1}>
								{"NUESTRO "}
								<Text h1 h1Style={styles.title2}>
									{"EQUIPO"}
								</Text>
							</Text>
						</View>
						{people.map((item, i) => (
							<View style={[styles.alignItemsCenter]}>
								<CardInfo
									develop
									image={
										<Avatar
											size={150}
											source={{
												uri: item.photograph,
											}}
										/>
									}
									name={item.name}
									position={item.area}
								/>
							</View>
						))}
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
