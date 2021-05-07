import axios from 'axios';

export const getListDrink = () => {
  return async (dispatch) => {
    return axios.get('https://salty-dawn-54578.herokuapp.com/drink')
      .then(response => {
        const data = response.data.data.data;
        dispatch({
          type: "SET_DRINK",
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};