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
    case "UPDATE_DRINK": {
      let drinkData = [...state.drinks];
      const drinkIsList = drinkData.find((item) => item._id === action.payload._id);
      drinkData.splice(drinkData.indexOf(drinkIsList), 1, {...action.payload});
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
