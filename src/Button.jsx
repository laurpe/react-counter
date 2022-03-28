import React from "react";

const Button = ({ text, calculate }) => {
    return <button onClick={() => calculate(text)}>{text}</button>;
};

export default Button;
