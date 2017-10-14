import { isNull } from 'lodash';
import { AsyncStorage } from 'react-native';
import request, { API_PREFIX } from './request';]


let signedRequest;

try {
  const token = await AsyncStorage.getItem('auth-token');
  if (!isNull(token)){
  	signedRequest = request.set('Authorization', `JWT ${token}`);
  }
} catch (error) {
  
}

export const fetchUser = () =>
	signedRequest.get(`${API_PREFIX}/foo`);

