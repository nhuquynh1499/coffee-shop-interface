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

export const getInforByToken = (payload) => {
  return async (dispatch) => {
    return axios.get('https://salty-dawn-54578.herokuapp.com/users/me', {
      headers: {
        'Authorization': `Bearer ${payload}`
      }
    })
      .then(response => {
        const data = response.data.data.data;
        console.log(data)
        dispatch({
          type: "SET_INFOR",
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_AUTH",
    })
  }
}