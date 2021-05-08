export const addToCart = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: "ADD_ITEM",
      payload: payload
    })
  };
};