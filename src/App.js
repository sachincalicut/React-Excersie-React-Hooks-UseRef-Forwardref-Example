import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import CustomInput from './CustomInputtype';

export default function App() {
  const [notes, setNotes] = useState('');
  const count = useRef(1);
  const descRef = useRef();
  const clickHandle = () => {
    // console.log(descRef.current);
    const value = descRef.current.value;
    if (!value) descRef.current.focus();
    else alert(value);
  };
  useEffect(() => {
    count.current += 1;
  });
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <CustomInput
        ref={descRef}
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button onClick={clickHandle}>Add</button>
      <div>You have entered</div>
      <div>
        <strong>{notes}</strong>
      </div>
      <div>
        <span>{count.current}</span>
      </div>
    </div>
  );
}
