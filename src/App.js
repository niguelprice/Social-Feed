import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';


function App() {

const [entries, setEntries] = useState([{Name: 'Niguel Price', Post: 'Im a software engineer'}, {Name: 'Nigue Price', Post: 'Im a electrical engineer'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
