import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState();
  const [description, setDescription] = useState();

  const submit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('image', file)
    data.append('description', description)
    const result = axios.post('/posts', data);
    console.log(result)
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Image Upload Project</h1>
      </header>
      <form onSubmit={submit}>
        <input
          filename={file}
          onChange={e => setFile(e.target.files[0])}
          type='file'
          accept="image/*"
        ></input>
        <input
          onChange={e => setDescription(e.target.value)}
          type="text"
          placeholder="description"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
