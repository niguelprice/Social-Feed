import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {

const [entries, setEntries] = useState([{Name: 'Niguel Price', Post: 'Im a software engineer'}, {Name: 'Nigue Price', Post: 'Im a electrical engineer'}])

  return (
    <div>
      <CreatePost />
      <DisplayPost parentEntries={entries} />
    </div>
  );
}

export default App;
