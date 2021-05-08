import axios from "axios";

export const getEvents = (payload) => {
  return async (dispatch) => {
    return axios
      .get("https://salty-dawn-54578.herokuapp.com/event", payload)
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "GET_EVENTS",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
