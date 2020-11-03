import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Form from './components/form.js';
import Results from './components/result';

function App() {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpw: '',
    firstnameerror: '',
    lastnamerror: '',
    emailerror: '',
    passworderror: '',
    confirmpwerror: '',
    confirmerror: '',
    isfirstnameerror: false,
    islastnameerror: false,
  });

  return (
    <div className="App">
      <Form input={state} setinput={setState} />
      <Results output={state} />
    </div>
  );
}

export default App;
