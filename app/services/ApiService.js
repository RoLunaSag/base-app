import axios from 'axios';
import Qs from "qs";

const host = 'https://morning-hamlet-18619.herokuapp.com/api/v1';

export async function getPeople() {
	try {
		const response = await axios({
			url: `${host}/names`,
			method: 'GET'
		})
		return response
	} catch (e) {
		alert('¡ESPERA! \n Ha ocurrido un error al cargar los datos' )
	}
}

export async function saveForm(dataform) {
	try {
		const response = await axios({
			url: `${host}/form`,
			method: 'POST',
			data: dataform,
		})
		return response
	} catch {(error => {
		console.log(error.response)
	})};
}