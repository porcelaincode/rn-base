// all user
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginRequest} from '../../services/auth';

export async function saveToStorage(key: string, value: any) {
  await AsyncStorage.setItem(key, value);
}

export async function removeFromStorage(key: string) {
  await AsyncStorage.removeItem(key);
}

// get back
export const loginUser = (user: any) => async (dispatch: any) => {
  try {
    const res = await loginRequest(user);
    if (res.data) {
      saveToStorage('jwtToken', res.data.token).then(() => {
        saveToStorage('refreshToken', res.data.refreshToken);
      });
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    } else {
      console.log('Unable to fetch');
    }
  } catch (error) {
    // Add custom logic to handle errors
  }
};

export const logoutUser = () => (dispatch: any) => {
  removeFromStorage('jwtToken').then(() => {
    removeFromStorage('refreshToken');
  });
  dispatch({
    type: REMOVE_USER,
  });
};
