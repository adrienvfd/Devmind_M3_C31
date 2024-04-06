import { ADD_NOTE } from "../action/action";
 
const initialState = {
  notes: [],
};
 
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_NOTE:
      console.log(state);
      return {
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            description: action.payload.description,
          },
        ],
      };

      case "REMOVE_NOTE":
        console.log(state);
      return {
        notes: state.notes.filter((note: any) => note.title !== action.payload.title),
      };
 
    default:
      console.log(state);
      return state;
  }
};
 
export default rootReducer;