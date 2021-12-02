import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from "react-router-dom";
import Home from "./components/home";
import data from "./components/students";
import { useState } from "react";

function App() {
  const { people, setpeople } = useState(data);
  return (
    <div className="App">
      <Home data={data} />
    </div>
  );
}

export default App;

//router here
