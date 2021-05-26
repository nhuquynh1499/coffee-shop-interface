import axios from 'axios';
import { toast } from "react-toastify";

export const getInforByToken = (payload) => {
  return async (dispatch) => {
    return axios.get('https://salty-dawn-54578.herokuapp.com/staff/me', {
      headers: {
        'Authorization': `Bearer ${payload}`
      }
    })
      .then(response => {
        const data = response.data.data.data;
        dispatch({
          type: "SET_ADMIN_INFOR",
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};