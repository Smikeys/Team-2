import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ClothingDisplay({
    title,
    source,
    height,
    width,
    alt,
    color,
    path
}: {
    title: string;
    source: string;
    height: number;
    width: number;
    alt: string;
    color: string;
    path: string;
}): JSX.Element {
    return (
        <div>
            <Col>{title}</Col>
            <img
                src={source}
                height={height}
                width={width}
                alt={alt}
                color={color}
            ></img>
            <div>
                <Link to={path}>
                    <Button
                        style={{
                            fontSize: "10px"
                        }}
                    >
                        Detail
                    </Button>
                </Link>
            </div>
            <p>Price: $2.00</p>
            <Button>Add to Cart</Button>
        </div>
    );
}
