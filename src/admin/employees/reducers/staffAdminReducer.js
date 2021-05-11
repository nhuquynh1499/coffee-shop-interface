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
    case "POST_STAFF": {
      const staffData = [...state.listStaff];
      staffData.push(action.payload);
      return {
        ...state,
        listStaff: staffData,
      };
    }

    default: {
      return state;
    }
  }
};

export default staffAdminReducer;
