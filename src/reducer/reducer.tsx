import { ADD_NOTE } from "../action/action";
import {Note} from "../app/Types";

export type State = {
  notes: Note[];
}

const initialState: State = {
  notes: [{
    title: "JIOJIO",
    description: "DSF",
    id: -1,
  }],
};

const rootReducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case ADD_NOTE:
      console.log(state);
      return {
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            description: action.payload.description,
            id: action.payload.id,
          },
        ],
      };
    case "REMOVE_NOTE":
      console.log(state);
      const index = state.notes.findIndex((note) => note.id === action.payload.id);
      const newNotes = [...state.notes];
      newNotes.splice(index, 1);
      return {
        notes: newNotes,
      };

    case "EDIT_NOTE":
      console.log(state);
      const index2 = state.notes.findIndex((note) => note.id === action.payload.id);
      const newNotes2 = [...state.notes];
      newNotes2[index2] = {
        title: action.payload.title,
        description: action.payload.description,
        id: action.payload.id,
      };
      return {
        notes: newNotes2,
      };
 
    default:
      console.log(state);
      return state;
  }
};
 
export default rootReducer;
