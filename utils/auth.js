import { AsyncStorage } from 'react-native';
import { isNull } from 'lodash';
import request, { API_PREFIX_URL } from './request';


export const isLoggedIn = () => {
	try {
		const token = await AsyncStorage.getItem('auth-token');
		if(isNull(token)) {
			return false;
		}
		return true;
	} catch (error) {
		//
	}
}

export const getUserData = () => {
	if(!isLoggedIn()) {
		return Promise.resolve(true);
	} else {
		try {
			const token = await AsyncStorage.getItem('auth-token');
			request.set('Authorization', `JWT ${token}`);
			return request.get(`${API_PREFIX_URL}/users/show`);
		} catch (error) {
			// 
		}
	}
}

export const logout = () => {
	request.unset('Authorization');
	try {
		await AsyncStorage.removeItem('auth-token');
	} catch (error) {
		//
	}
}

export const login = (email, password) =>
	isLoggedIn() ? Promise.reslove(true) :
	request.post(`${API_PREFIX_URL}/auth/login`)
		.send({ email, password })
		.then((response) => {
			if(response.status == 200) {
				const token = response.body.token;
				try {
					await AsyncStorage.setItem('auth-token', token);
					request.set('Authorization', `JWT ${token}`);
					return Promise.resolve(true);
				} catch (err) {
					return Promise.resolve(false);
				}
			}
			return Promise.resolve(false);
		})
		.catch((err) => new Error(err))