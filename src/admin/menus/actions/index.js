import axios from "axios";

export const getDrink = (payload) => {
  return async (dispatch) => {
    return axios
      .get(
        "https://salty-dawn-54578.herokuapp.com/drink",
        { params: { keyword: "tra" } },
        payload
      )
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "GET_DRINK",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
