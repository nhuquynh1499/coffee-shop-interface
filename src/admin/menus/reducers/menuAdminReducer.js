const initialState = {
  drinks: [],
};

const menuAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DRINK": {
      return {
        ...state,
        drinks: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default menuAdminReducer;
