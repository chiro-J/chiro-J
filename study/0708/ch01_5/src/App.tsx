import React from 'react';
import './App.css';
// import * as D from "./data";
import { Component } from 'react';
import ClassComponent from './ClassComponent';
import { ArrowComponent } from './ArrowComponent';
import OnClick from './pages/onClick';



export default class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent href="https://www.google.com" text="go to Google" />
        <ArrowComponent href="https://www.twitter.com" text="go to Twitter" />
        <OnClick />
      </ul>
    )
  }
}



