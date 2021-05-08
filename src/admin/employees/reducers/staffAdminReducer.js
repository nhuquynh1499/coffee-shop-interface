const initialState = {
  listStaff: [],
};

const staffAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_STAFF": {
      return {
        ...state,
        listStaff: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default staffAdminReducer;
