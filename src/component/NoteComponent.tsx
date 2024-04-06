import React, { useState } from "react";
import { Note, NoteInfo } from "../app/Types";
import { useDispatch } from "react-redux";
import "./NoteComponent.css";
import { removeNote, editNote } from "../action/action";

const NoteComponent = (props: Note) => {
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(props.description);
  const handleClick = () => {
    dispatch(removeNote(props.id));
  };
  const handleEdit = () => {
    setEdit(true);
  };
  const handleSave = () => {
    dispatch(editNote(props.id, props.title, description));
    setEdit(false);
  };

  const dispatch = useDispatch();

  return (
    <div className="note">
      <div className="top-right">
        <button className="remove" onClick={handleClick}>X</button>
        {edit ? (
          <button className="save" onClick={handleSave}>Save</button>
        ) : (
          <button className="edit" onClick={handleEdit}>Edit</button>
        )}
      </div>
      <h3>{props.title}</h3>
      {edit ? (
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      ) : (
        <span>{props.description}</span>
      )}
      <h4>id: {props.id}</h4>
    </div>
  );
};

export default NoteComponent;

