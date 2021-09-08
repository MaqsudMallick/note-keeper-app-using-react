import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
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
  function expand() {
    setExpanded(true);
  }
  return (
    <form>
      {isExpanded ? (
        <input
          onChange={handleInputChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
      ) : null}
      <textarea
        onClick={expand}
        onChange={handleInputChange}
        name="content"
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
        value={note.content}
      />
      <Zoom in={isExpanded}>
        <button
          className="add-button"
          onClick={(event) => {
            event.preventDefault();
            notePointer({ title: "", content: "" });
            props.elementCreator(note);
          }}
        >
          <AddIcon />
        </button>
      </Zoom>
    </form>
  );
}

export default CreateArea;
