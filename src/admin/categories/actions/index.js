import axios from 'axios';

export const getList = (payload) => {
  return async (dispatch) => {
    return axios.get('https://salty-dawn-54578.herokuapp.com/category', payload)
      .then(response => {
        const data = response.data.data.data;
        dispatch({
          type: "GET_LIST",
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};
