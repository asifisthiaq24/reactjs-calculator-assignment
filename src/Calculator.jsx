import React from 'react';
import KeyPad from './components/KeyPad';
import Display from './components/Display';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '0'
        }
    }
    getBtnValue = (value) => {
        //console.log(value);
        if (value == "=") {
            this.calculate();
        }
        else if (value == "C") {
            this.removeLastChar();
        }
        else if (value == "Clear") {
            this.reset();
        }
        else if(value == 'Prev'){
            this.setState({
                result:'Under Construction :('
            })
        }
        else if(value == 'Next'){
            this.setState({
                result:'Under Construction :('
            })
        }
        else {
            if (this.state.result == '0' || this.state.result == 'error' 
            ||this.state.result == 'Infinity'
            ||this.state.result == 'Under Construction :(') {
                //console.log(this.state.result);
                this.setState({
                    result: value + ''
                })
            }
            else {
                this.setState({
                    result: this.state.result + value
                })
            }
        }
    }
    reset = () => {
        this.setState({
            result:'0'
        })
    }
    removeLastChar = () => {
        if(this.state.result.length == 1){
            this.setState({
                result:'0'
            })
        }
        else{
            this.setState({
                result: this.state.result.slice(0,-1)
            })
        }
    }
    calculate = () => {
        try{
            let res = eval(this.state.result);
            this.setState({
                result: res+''
            })
        }
        catch(e){
            this.setState({
                result: 'error'
            })
        }
    }
    render() {
        const element = [
            { index: 1, key1: 'Clear', key2: '/', class1: "info clear", class2: "success operation" },
            { index: 2, key1: 7, key2: 8, key3: 9, key4: '-', class1: "danger key", class2: "danger key", class3: "danger key", class4: "success operation" },
            { index: 3, key1: 4, key2: 5, key3: 6, key4: '+', class1: "danger key", class2: "danger key", class3: "danger key", class4: "success operation" },
            { index: 4, key1: 1, key2: 2, key3: 3, key4: '=', class1: "danger key", class2: "danger key", class3: "danger key", class4: "success operation" },
            { index: 5, key1: 'Prev', key2: 0, key3: 'Next', key4: 'C', class1: "info key", class2: "danger key", class3: "info key", class4: "info operation" }
        ];
        return (
            <div>
                <Display result={this.state.result} />
                <KeyPad keypadObj={element} fromParent={this.getBtnValue} />
            </div>
        )
    }
}
export default Calculator;
