export const EntryReducer = (state, action) => {
  switch (action.type) {
    case "SET_ENTRY":
      return { ...state, entries: action.payload }
    case "ADD_ENTRY":
      return { ...state, entries: [...state.entries, action.payload] }
    case "UPDATE_ENTRY":
      return {
        ...state,
        entries: state.entries.map((entry) =>
          entry._id === action.payload._id ? action.payload : entry
        ),
      }
    case "DELETE_ENTRY":
      return {
        ...state,
        entries: state.entries.filter(
          (entry) => entry._id !== action.payload
        ),
      }
    default:
      return state
  }
}