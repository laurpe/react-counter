import React, { Component } from "react";
import Circle from "./Circle";
import Button from "./Button";

class Main extends Component {
    state = { counter: 0 };

    handleClick = () => {
        console.log("button clicked");
    };

    addFive = () => {
        this.setState({ counter: this.state.counter + 5 });
    };

    addOne = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    reset = () => {
        this.setState({ counter: 0 });
    };

    removeOne = () => {
        this.setState({ counter: this.state.counter - 1 });
    };

    removeFive = () => {
        this.setState({ counter: this.state.counter - 5 });
    };

    render() {
        return (
            <div className="main">
                <Circle count={this.state.counter} />
                <div className="buttons">
                    <Button onClick={this.addFive} text="Add five" />
                    <Button onClick={this.addOne} text="Add one" />
                    <Button onClick={this.reset} text="Reset" />
                    <Button onClick={this.removeOne} text="Remove one" />
                    <Button onClick={this.removeFive} text="Remove five" />
                </div>
            </div>
        );
    }
}

// const Main = () => {
//     const [count, setCount] = useState(0);
//     const calculate = (text) => {
//         switch (text) {
//             case "Add five":
//                 setCount(count + 5);
//                 break;
//             case "Add one":
//                 setCount(count + 1);
//                 break;
//             case "Reset":
//                 setCount(0);
//                 break;
//             case "Remove one":
//                 setCount(count - 1);
//                 break;
//             case "Remove five":
//                 setCount(count - 5);
//                 break;
//             default:
//                 setCount(0);
//         }
//     };
//     return (
//         <div className="main">
//             <Circle count={count} />
//             <div className="buttons">
//                 <Button text="Add five" calculate={calculate} />
//                 <Button text="Add one" calculate={calculate} />
//                 <Button text="Reset" calculate={calculate} />
//                 <Button text="Remove one" calculate={calculate} />
//                 <Button text="Remove five" calculate={calculate} />
//             </div>
//         </div>
//     );
// };

export default Main;
