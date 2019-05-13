import React, {Component} from 'react';
import Num1 from './num1';
import Num2 from './num2';

class Calculator extends Component {

    state = {
        value : 0,
        num1 : 0,
        num2 : 0
    };

    render() {
        let {value, num1, num2} = this.state;
        return (
            <div>
                <div>{value}</div>
                <div>
                    <Num1 num1={num1} num1handleChange={this.num1handleChange} />
                    <Num2 num2={num2} num2handleChange={this.num2handleChange} />
                </div>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handleMul}>*</button>
                <button onClick={this.handleDiv}>/</button>
            </div>
        );
    }

    handlePlus = () => {
        this.setState({
            value: this.state.num1 + this.state.num2
        });
    }
    handleMinus = () =>{
        this.setState({
            value: this.state.num1 - this.state.num2
        });
    }
    handleMul = () => {
        this.setState({
            value: this.state.num1 * this.state.num2
        });
    }
    handleDiv = () =>{
        this.setState({
            value: this.state.num1 / this.state.num2
        });
    }

    num1handleChange = event => this.setState({
        num1 : parseInt(event.target.value)
    });
    num2handleChange = event => this.setState({
        num2 : parseInt(event.target.value)
    });


}

export default Calculator;