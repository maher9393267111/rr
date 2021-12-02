import React, { Component } from "react";
//import { useState } from "react";
//import {useNavigate} from 'react-router-dom'
import Child from "./child";
//import data from "./students";
import "../index.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  render() {
    return (
      <div className="cards">
        {this.state.data.map((person) => {
          return (
            <div>
              <h1>{person.name}</h1>
            </div>
          );
        })}

        <Child />
      </div>
    );
  }
}
