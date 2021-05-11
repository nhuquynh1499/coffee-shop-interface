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
    case "POST_EVENT": {
      const eventData = [...state.events];
      eventData.push(action.payload);
      return {
        ...state,
        events: eventData,
      };
    }
    default: {
      return state;
    }
  }
};

export default eventAdminReducer;
