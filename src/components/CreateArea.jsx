import React, { useState } from "react";

function CreateArea(props) {
  const [note, notePointer] = useState({ title: "", content: "" });
  function handleInputChange(event) {
    const { name, value } = event.target;
    notePointer((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleInputChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleInputChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            notePointer({ title: "", content: "" });
            props.elementCreator(note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
