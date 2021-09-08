import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, notesAdder] = useState([]);

  function noting(note) {
    notesAdder((prev) => {
      return [...prev, note];
    });
  }
  function deleteNote(identify) {
    console.log(identify);
    notesAdder(notes.filter((note) => note.title !== identify));
  }
  return (
    <div>
      <Header />
      <CreateArea elementCreator={noting} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
