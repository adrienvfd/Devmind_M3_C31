export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
 
export const addNote = (title: string, description: string) => {
    return {
        type: ADD_NOTE,
        payload: {
            title: title, description: description
        }
    };
};

export const removeNote = (title: string) => {
    return {
        type: "REMOVE_NOTE",
        payload: {
            title: title
        }
    };
}

export default addNote