import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { random, commerce, fake } from 'faker'
import { Col, Container, Row } from 'reactstrap'
import CartItem from './cartItem'



// const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
// const apikey = "$2b$10$rmFZQmtJ/M/Sv19mAiZapexNrKeIHyy2mprlim2Z2q.lUANnllBPy"
const localurl = "http://127.0.0.1:5500/src/Components/pexel.json"
const BuyPage = ({ addInCart }) => {
    const [product, setProduct] = useState([]);

    //   const fetchPhotos = async () => {
    //     const response = await Axios.get(url, {
    //       header: {
    //         Authorization: apiKey
    //       }
    //     });

    const fetchPhotos = async () => {
        const { data } = await axios.get(localurl, {});

        const { photos } = data;

        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }));

        setProduct(allProduct);
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    return (
        <Container fluid>
            <h1 className="text-success text-center">Buy Page</h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CartItem product={product} addInCart={addInCart} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BuyPage;
