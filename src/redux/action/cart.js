export const addToCart = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: "ADD_ITEM",
      payload: payload
    })
  };
};

export const changeQuantityItem = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_QUANTITY",
      payload: payload
    })
  }
}