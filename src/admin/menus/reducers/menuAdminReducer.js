const initialState = {
  drinks: [],
};

const menuAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DRINKS": {
      return {
        ...state,
        drinks: action.payload,
      };
    }
    case "POST_DRINK": {
      let drinkData = [...state.drinks];
      drinkData.push(action.payload);
      return {
        ...state,
        drinks: drinkData,
      };
    }
    default: {
      return state;
    }
  }
};

export default menuAdminReducer;
