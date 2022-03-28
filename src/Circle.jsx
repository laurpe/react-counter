import React from "react";

const Circle = ({ count }) => {
    if (count % 2 !== 0) {
        return <div className="circle odd">{count}</div>;
    }
    return <div className="circle">{count}</div>;
};

export default Circle;
