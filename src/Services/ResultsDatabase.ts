import axios from "axios";
import { UserObj } from "../objects/UserObj";

const baseURL = "/api/users";

const getCadet = (id:number) => {
	return axios
		.get(baseURL + `/${id}`).then(response=>{
      return response.data
    }).catch(error=>console.log(error))
};

const addCadet = (cadetObject: UserObj) => {
	return axios
		.post(baseURL, cadetObject)
		.then((response) => {
			return response.data
		})
		.catch((error) => {
			console.log(error);
		});
};

const updateCadet = (id:number, cadetObject: UserObj) => {
	return axios
		.put(baseURL+`/${id}`, cadetObject)
		.then((response) => {
			return response.data;
		})
		.catch((error) => console.log(error));
};

export default { getCadet, addCadet, updateCadet };
