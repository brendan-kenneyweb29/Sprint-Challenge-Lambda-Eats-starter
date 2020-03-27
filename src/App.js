import React from "react";
import {Button} from "reactstrap";
import "./App.css"
//import yup from "yup";
import {BrowserRouter as Route, Router, Link} from "react-router-dom";
import Form from "./Components/Form"

export default function App () {
  return(
    <div className="App">
      <h1>Lambda Eats</h1>
      <h3>Hungry? Order your <em>favorite</em> food: </h3>
      <Button link="/Form">Order a Pizza</Button>
      <Form />
    </div>
  )
}
