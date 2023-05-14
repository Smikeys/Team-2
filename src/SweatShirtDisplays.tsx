import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ClothingDisplay } from "./ClothingDisplay";
import sweatshirt1 from "./images/sweatshirt1.png";
import sweatshirt2 from "./images/sweatshirt2.png";
import sweatshirt3 from "./images/sweatshirt3.png";
import sweatshirt4 from "./images/sweatshirt4.png";
import sweatshirt5 from "./images/sweatshirt5.png";
import sweatshirt6 from "./images/sweatshirt6.png";

export function SweatShirtDisplays({ color }: { color: string }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {(color === "black" || color === "all") && (
                            <ClothingDisplay
                                title={"Sweatshirt One"}
                                source={sweatshirt1}
                                height={200}
                                width={200}
                                alt={"Shirt one"}
                                color={"black"}
                                path="/SweatshirtOne"
                            ></ClothingDisplay>
                        )}
                    </Col>
                    <Col>
                        {(color === "blue" || color === "all") && (
                            <ClothingDisplay
                                title={"Sweatshirt Two"}
                                source={sweatshirt2}
                                height={200}
                                width={200}
                                alt={"Shirt two"}
                                color={"blue"}
                                path="/SweatshirtTwo"
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {(color === "red" || color === "all") && (
                            <ClothingDisplay
                                title={"Sweatshirt Three"}
                                source={sweatshirt3}
                                height={200}
                                width={200}
                                alt={"Shirt three"}
                                color={"red"}
                                path="/SweatshirtThree"
                            ></ClothingDisplay>
                        )}
                    </Col>
                    <Col>
                        {(color === "green" || color === "all") && (
                            <ClothingDisplay
                                title={"Sweatshirt Four"}
                                source={sweatshirt4}
                                height={200}
                                width={200}
                                alt={"Shirt four"}
                                color={"green"}
                                path="/SweatshirtFour"
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {(color === "purple" || color === "all") && (
                            <ClothingDisplay
                                title={"Sweatshirt Five"}
                                source={sweatshirt5}
                                height={200}
                                width={200}
                                alt={"Shirt five"}
                                color={"purple"}
                                path="/SweatshirtFive"
                            ></ClothingDisplay>
                        )}
                    </Col>
                    <Col>
                        {(color === "yellow" || color === "all") && (
                            <ClothingDisplay
                                title={"Sweatshirt Six"}
                                source={sweatshirt6}
                                height={200}
                                width={200}
                                alt={"Shirt six"}
                                color={"yellow"}
                                path="/SweatshirtSix"
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SweatShirtDisplays;
