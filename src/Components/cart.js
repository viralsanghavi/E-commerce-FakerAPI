import React from 'react'
import { ListGroup, ListGroupItem, Container, Button, CardHeader, Card, CardBody, CardFooter, Row, Col } from "reactstrap"

const Cart = ({ cartItem, removeItem, buyNow }) => {
    let amount = 0;
    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    })
    return (
        <Container fluid>
            <h1 className="text-success"> Your Cart.</h1>
            <ListGroup> {cartItem.map(item => (
                <ListGroupItem key={item.id}>
                    <Row>
                        <Col >
                            <img
                                height={80}
                                src={item.tinyImage}
                            />
                        </Col>
                        <Col className="text-center">
                            <div className="text-center">
                                {item.productName}
                                <span>{item.productPrice}</span>
                                <Button color="danger" onClick={() => removeItem(removeItem)}>Remove</Button>
                            </div>
                        </Col>
                    </Row>
                </ListGroupItem>
                // if all empty

            ))}
            </ListGroup>
            {cartItem.length >= 1 ? (
                <Card className="text-center mt-3">
                    <CardHeader>Grand Total</CardHeader>
                    <CardBody>Your Amount for {cartItem.length} products is {amount}</CardBody>
                    <CardFooter><Button color="success" onClick={buyNow}>Pay here</Button></CardFooter>
                </Card>
            ) : (
                    <h1 className="text-warning"> Cart empty</h1>
                )
            }
        </Container >
    )
}


export default Cart