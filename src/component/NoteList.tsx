import React from "react";
import NoteComponent from "./NoteComponent";
import "./NoteList.css";
import { Note } from "../app/Types";
import { useSelector } from "react-redux";
import { State } from "../reducer/reducer";

const NotesList = () => {
  const notes = useSelector((state: State) => state.notes);
  return (
    <div>
      {notes &&
        notes.map((note: { title: string; description: string; }, noteIndex: number) => (
          <NoteComponent
            key={`note-${noteIndex}-${note.title}`}
            title={note.title}
            description={note.description}
            id = {noteIndex}
          />
        ))}
    </div>
  );
};

export default NotesList;
