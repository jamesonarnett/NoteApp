import React from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";
import notes from "./note";

// function createNotes(noteItem) {
//   return (
//     <Note
//       key={noteItem.key}
//       title={noteItem.title}
//       content={noteItem.content}
//     />
//   );
// }

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      ;
      <Footer />
    </div>
  );
}

export default App;
