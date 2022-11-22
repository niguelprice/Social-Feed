import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CreatePost from './Components/CreatePost/CreatePost';
import './App.css';

function App() {

const [entries, setEntries] = useState([{Name: 'Niguel Price', Post: 'Im a software engineer'}, {Name: 'Nigue Price', Post: 'Im a electrical engineer'}])

function addNewEntry(entry){
  let tempEntries = [entry, ...entries]
  setEntries(tempEntries)
}

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-9'>
          <div className='border-box'>
            <CreatePost addNewEntryProperty={addNewEntry} />
          </div>
          <div className='border-box'>
            <DisplayPost parentEntries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
