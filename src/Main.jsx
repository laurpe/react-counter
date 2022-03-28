import React, { useState } from "react";
import Circle from "./Circle";
import Button from "./Button";

const Main = () => {
    const [count, setCount] = useState(0);
    const calculate = (text) => {
        switch (text) {
            case "Add five":
                setCount(count + 5);
                break;
            case "Add one":
                setCount(count + 1);
                break;
            case "Reset":
                setCount(0);
                break;
            case "Remove one":
                setCount(count - 1);
                break;
            case "Remove five":
                setCount(count - 5);
                break;
            default:
                setCount(0);
        }
    };
    return (
        <div className="main">
            <Circle count={count} />
            <div className="buttons">
                <Button text="Add five" calculate={calculate} />
                <Button text="Add one" calculate={calculate} />
                <Button text="Reset" calculate={calculate} />
                <Button text="Remove one" calculate={calculate} />
                <Button text="Remove five" calculate={calculate} />
            </div>
        </div>
    );
};

export default Main;
