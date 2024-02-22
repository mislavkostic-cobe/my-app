import { useState } from "react";
import "./App.css";

function App() {
  type Note = {
    isOpen: boolean;
    id: number;
    title: string;
    content: string;
  };
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [shouldRender, rerender] = useState(false);

  const newNote: Note = {
    isOpen: false,
    id: notes.length + 1,
    title: title,
    content: content,
  };

  const toggleNote = (note: Note) => {
    note.isOpen = !note.isOpen;
    console.log(note);
    setNotes;
    rerender(shouldRender => !shouldRender)
  };

  const addNote = (e: React.FormEvent) => {
    e.preventDefault();
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
    console.log(newNote);
  };

  const handleContent = (note: Note) => {
    if (note.isOpen) {
      return <p className="notes-content">{note.content}</p>;
    } else {
      const elements = document.getElementsByClassName("#notes-content");
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }
    }
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <label className="label-title">
          Title
          <input
            className="form-title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
        <label>
          Content
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </label>
        <button className="submit" type="submit">
          Save
        </button>
      </form>
      <div className="notes-list">
        {notes.map((note) => (
          <div
            key={note.id}
            className="note-item"
            onClick={() => toggleNote(note)}
          >
            <div className="notes-header"></div>
            <p className="notes-title">{note.title}</p>
            <div>{handleContent(note)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
