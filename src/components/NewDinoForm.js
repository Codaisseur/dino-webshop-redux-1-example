import React, { useState } from "react";

export default function NewDinoForm() {
  const [newDinoName, setNewDinoName] = useState("");

  return (
    <div>
      <p>
        New dino name:{" "}
        <input
          value={newDinoName}
          onChange={(e) => {
            setNewDinoName(e.target.value);
          }}
        />
      </p>
      <p>
        <em>Homework :D Make this button work: </em>
        <button>Add dino</button>
      </p>
    </div>
  );
}
