import axios from 'axios';

import config from '../config';

// TODO
export async function loginRequest(data: any) {
  const res = await axios.get(`${config.BASE_URL}/auth/login`, {
    data,
  });
  return res;
}
