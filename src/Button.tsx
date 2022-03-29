import React from "react";
import classes from "./Button.module.css";

interface Props {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: Props) => {
    return (
        <button className={classes.button} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
