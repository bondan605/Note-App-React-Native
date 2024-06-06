import React, { useState } from "react";
import Home from "./src/screens/Home";
import AddNote from "./src/screens/AddNote";
import EditNote from "./src/screens/EditNote";

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  updatedNote,
  currentNote,
  setCurrentNote,
  deleteNote,
}) => {
  switch (currentPage) {
    case "home":
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setCurrentNote={setCurrentNote}
          deleteNote={deleteNote}
        />
      );
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return (
        <EditNote
          setCurrentPage={setCurrentPage}
          updatedNote={updatedNote}
          currentNote={currentNote}
        />
      );
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentNote, setCurrentNote] = useState([]);
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const updatedNote = (id, title, desc) => {
    const updatedNote = noteList.map((note) => {
      if (note.id === id) {
        return {
          id,
          title,
          desc,
        };
      }
      return note;
    });
    setNoteList(updatedNote);
  };

  const deleteNote = (id) => {
    const deleteNote = noteList.filter((note) => {
      return note.id !== id;
    });

    setNoteList(deleteNote);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      updatedNote={updatedNote}
      currentNote={currentNote}
      setCurrentNote={setCurrentNote}
      deleteNote={deleteNote}
    />
  );
};

export default App;
