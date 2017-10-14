import defaults from 'superagent-defaults';

export const API_PREFIX_URL = 
	process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000/api/v1';

const instance = defaults();

export default instance;
