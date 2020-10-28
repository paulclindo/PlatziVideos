export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      // eslint-disable-next-line no-case-declarations
      const exist = state.mylist.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id !== action.payload.id),
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
    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    case "SEARCH_VIDEO":
      console.log(action.payload);
      if (action.payload === "") return { ...state, search: [] };
      return {
        ...state,
        search: [...state.trends, ...state.originals].filter(
          (item) =>
            item.title.toLowerCase().includes(action.payload.toLowerCase())
          // eslint-disable-next-line function-paren-newline
        ),
      };

    default:
      return state;
  }
};
