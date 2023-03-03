import axios from "axios";
import { get } from "../helpers";

const settings = {

	baseURL: 'https://uni-store.vercel.app/api',
	headers: {
		Accept: 'application/json,text/plain,*/*',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': "*"
	}
}

// console.log(get("auth"))

export const request = axios.create(settings);

request.interceptors.request.use(
	(config) => {
		const token = get("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token == null ? "0123456789" : token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
