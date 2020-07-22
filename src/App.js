import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

import { toast, ToastContainer } from 'react-toastify';
import { Container, Row, Col } from 'reactstrap'
import BuyPage from './Components/butSection';
import Cart from './Components/cart';

const App = () => {

  const [cartItem, setCartItem] = useState([])

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id
    })
    if (isAlreadyAdded !== -1) {
      toast("Item Already Added", { type: "warning" })
      return;
    }

    setCartItem([...cartItem, item])

  }
  const buyNow = () => {
    setCartItem([])
    toast("Transaction Succesfful", { type: "success" })
  }

  const removeItem = item => {
    setCartItem([cartItem.filter(single_item => single_item.id !== item.id)])
  }

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>



    </Container>

  );
}

export default App;
