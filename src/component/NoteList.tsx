import React from "react";
import Note from "./Note";
 
const NotesList = (props: any) => {
  return (
    <div
      style={{
        padding: "8px",
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {props.notes &&
        props.notes.map((note: any, noteIndex: any) => (
          <Note
            key={`note-${noteIndex}-${note.title}`}
            title={note.title}
            description={note.description}
          />
        ))}
    </div>
  );
};
 
export default NotesList;
