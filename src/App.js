import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Products from './component/Products/Products';

// import DataInput from "./DataInput";

class App extends Component {

  state = {
    productList: [],
  }

  componentDidMount = () => {
    const url = "https://shopping-cart-apis-jay.herokuapp.com/products";
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          productList: res.data,
        });
        // console.log(res.data);
      })
  }
  render() {

    return (
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Products" element={<Products productList={this.state.productList}/>} />
        </Routes>


      </div>
    );
  }
}

export default App;
