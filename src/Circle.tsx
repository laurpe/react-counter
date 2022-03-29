import React from "react";
import classes from "./Circle.module.css";

interface Props {
    count: number;
}

const Circle = ({ count }: Props) => {
    if (count % 2 !== 0) {
        return (
            <div className={`${classes.circle} ${classes.odd}`}>{count}</div>
        );
    }
    return <div className={classes.circle}>{count}</div>;
};

export default Circle;
