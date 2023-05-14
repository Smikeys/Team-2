import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ClothingDisplay } from "./ClothingDisplay";
import shirt1 from "./images/shirt1.png";
import shirt2 from "./images/shirt2.png";
import shirt3 from "./images/shirt3.png";
import shirt4 from "./images/shirt4.png";
import shirt5 from "./images/shirt5.png";
import shirt6 from "./images/shirt6.png";

export function ShirtDisplays({ color }: { color: string }) {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {(color === "black" || color === "all") && (
                            <ClothingDisplay
                                title={"Shirt One"}
                                source={shirt1}
                                height={200}
                                width={200}
                                alt={"Shirt one"}
                                color={"black"}
                                path="/ShirtOne"
                            ></ClothingDisplay>
                        )}
                    </Col>
                    <Col>
                        {(color === "red" || color === "all") && (
                            <ClothingDisplay
                                title={"Shirt Two"}
                                source={shirt2}
                                height={200}
                                width={200}
                                alt={"Shirt two"}
                                color={"red"}
                                path="/ShirtTwo"
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {(color === "green" || color === "all") && (
                            <ClothingDisplay
                                title={"Shirt Three"}
                                source={shirt3}
                                height={200}
                                width={200}
                                alt={"Shirt three"}
                                color={"green"}
                                path="/ShirtThree"
                            ></ClothingDisplay>
                        )}
                    </Col>
                    <Col>
                        {(color === "blue" || color === "all") && (
                            <ClothingDisplay
                                title={"Shirt Four"}
                                source={shirt4}
                                height={200}
                                width={200}
                                alt={"Shirt four"}
                                color={"blue"}
                                path="/ShirtFour"
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {(color === "pink" || color === "all") && (
                            <ClothingDisplay
                                title={"Shirt Five"}
                                source={shirt5}
                                height={200}
                                width={200}
                                alt={"Shirt five"}
                                color={"pink"}
                                path="/ShirtFive"
                            ></ClothingDisplay>
                        )}
                    </Col>
                    <Col>
                        {(color === "yellow" || color === "all") && (
                            <ClothingDisplay
                                title={"Shirt Six"}
                                source={shirt6}
                                height={200}
                                width={200}
                                alt={"Shirt six"}
                                color={"yellow"}
                                path="/ShirtSix"
                            ></ClothingDisplay>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ShirtDisplays;
