import React from 'react';
import logo from './logo.svg';
import './App.css';
import { text } from 'stream/consumers';

import EventListener from './pages/EventListener'
import ReactOnClick from './pages/ReactOnClick';
import EventBubbling from './pages/EventBubbling';
import FileInput from './pages/FileInput';
import DragDrop from './pages/DragDrop';





// import  from ''
// import  from ''
// import  from ''
// import  from ''
// import  from ''
// import  from ''
// import  from ''




export default function App() {
  return (
    <div>
      <EventListener />
      <ReactOnClick />
      <EventBubbling />
      <FileInput /> 
      <DragDrop />
    </div>
  )
}

