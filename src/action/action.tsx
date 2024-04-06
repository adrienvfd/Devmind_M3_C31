export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
 
export const addNote = (title: string, description: string, id: number) => {
    return {
        type: ADD_NOTE,
        payload: {
            title: title, description: description, id: id
        }
    };
};

export const removeNote = (id: number) => {
    return {
        type: "REMOVE_NOTE",
        payload: {
            id: id
        }
    };
}

export const editNote = (id: number, title: string, description: string) => {
    return {
        type: "EDIT_NOTE",
        payload: {
            id: id, title: title, description: description
        }
    };
}

export default addNote