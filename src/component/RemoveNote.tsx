import React, { useState } from "react";
 
const RemoveNote: any = (props: any) => {
  const [title, setTitle] = useState("");
 
  return (
    <div
      style={{
        padding: "8px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "240px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "8px",
          boxSizing: "border-box",
        }}
      >
        <input
          style={{ width: "50%", marginBottom: "4px" }}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <button style={{ height: "24px", width: "72px" }}>Remove note</button>
      </div>
    </div>
  );
};
 
export default RemoveNote;
