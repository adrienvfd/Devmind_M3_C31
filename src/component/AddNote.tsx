import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../action/action";
import "./AddNote.css";

const AddNote: any = (props: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [index, setIndex] = useState(0);

  const addNewNote = () => {
    dispatch(addNote(title, description, index));
    setIndex(index + 1)
    setTitle("");
    setDescription("");
  };

  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <div className="inputContainer">
        <input
          className="input"
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <textarea
          className="textarea"
          onChange={(event) => setDescription(event.target.value)}
          defaultValue="Default description"
        ></textarea>
        <button className="button" onClick={addNewNote}>
          Add note
        </button>
      </div>
    </div>
  );
};
export default AddNote;