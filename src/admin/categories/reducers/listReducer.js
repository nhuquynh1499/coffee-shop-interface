export default (state = {}, { type, payload }) => {
  switch (type) {
    case "GET_LIST":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
