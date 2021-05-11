import axios from "axios";
import { TokenUtils } from "../../../utils/token.utils";

const token = TokenUtils.TOKEN_ADMIN;

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
          type: "GET_DRINKS",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const postDrink = (payload) => {
  return async (dispatch) => {
    return axios
      .post("https://salty-dawn-54578.herokuapp.com/drink", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data.data.data;
        dispatch({
          type: "POST_DRINK",
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
