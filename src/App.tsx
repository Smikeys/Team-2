import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Rachel Sison, Gia
                Diaz, Steven Kraus, Grace Melton, Ryan Sexton
                <div>
                    <Button>Login</Button>
                    <Button>Checkout</Button>
                </div>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
