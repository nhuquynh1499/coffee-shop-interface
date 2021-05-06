import axios from 'axios';

export const sendPostLogin = (payload) => {
  return async (dispatch) => {
    return axios.post('https://salty-dawn-54578.herokuapp.com/users/log-in', payload)
      .then(response => {
        const data = response.data.data.data;
        dispatch({
          type: "SET_STATUS_LOGIN",
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};