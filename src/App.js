import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Products from './component/Products/Products';

// import DataInput from "./DataInput";

class App extends Component {

  render() {

    return (
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
        </Routes>


      </div>
    );
  }
}

export default App;
