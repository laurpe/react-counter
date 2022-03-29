import React from "react";

interface Props {
    count: number;
}

const Circle = ({ count }: Props) => {
    if (count % 2 !== 0) {
        return <div className="circle odd">{count}</div>;
    }
    return <div className="circle">{count}</div>;
};

export default Circle;
