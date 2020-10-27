export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      // eslint-disable-next-line no-case-declarations
      const exist = state.mylist.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
        trends: state.trends.filter((item) => item.id !== action.payload.id),
        originals: state.originals.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id !== action.payload.id),
        trends: [...state.trends, action.payload],
        originals: [...state.originals, action.payload],
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
