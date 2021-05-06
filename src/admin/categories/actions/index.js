import jsonPlaceholder from "../api/jsonPlaceholder";

export const getList = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/category");
    dispatch({
      type: "GET_LIST",
      payload: response.data,
    });
  };
};
