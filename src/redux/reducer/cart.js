const initialState = {
  listInCart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      let listInCart = [...state.listInCart];
      listInCart.push(action.payload);

      return {
        ...state,
        listInCart,
        total: state.total + action.payload.price
      }
    }
    default: {
      return state;
    }
  }
}

export default cartReducer;