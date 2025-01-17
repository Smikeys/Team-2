import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import sweatshirt2 from "./images/sweatshirt2.png";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Sweatshirt Two Detail
                <div>
                    <Button>Back to All Products</Button>
                    <Button>Login</Button>
                    <Button>Cart</Button>
                </div>
            </header>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Col
                                style={{
                                    fontSize: "30px"
                                }}
                            >
                                Sweatshirt Two
                            </Col>
                            <img
                                data-testid={"blue"}
                                src={sweatshirt2}
                                height={400}
                                width={400}
                                alt={"Sweatshirt"}
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            ></img>
                        </Col>
                        <Col
                            style={{
                                fontSize: "30px"
                            }}
                        >
                            Product Description
                            <p
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "50px"
                                }}
                            >
                                This is a magnificent and very exquisite
                                sweatshirt. Made of the finest materials.
                            </p>
                            <p
                                style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    fontSize: "20px"
                                }}
                            >
                                Price: $2.00
                            </p>
                            <Button>Add to Cart</Button>
                            <Button>Remove from Cart</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
