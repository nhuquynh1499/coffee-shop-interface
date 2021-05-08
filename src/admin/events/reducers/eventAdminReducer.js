const initialState = {
  events: [],
};

const eventAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EVENTS": {
      return {
        ...state,
        events: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default eventAdminReducer;
