import React from 'react';
import '../components_css/KeyPad.css';
import { Button, ButtonGroup } from 'reactstrap';

class KeyPad extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const elements = this.props.keypadObj;
        return (
            <div class="forMainDivKeypad">
                {elements.map((row, index) => {
                    return <div>
                        {row.index == 1 ? <ButtonGroup size="lg">
                            <Button outline color={row.class1} size="lg" onClick={() => this.props.fromParent(row.key1)} >{row.key1}</Button>
                            <Button outline color={row.class2} size="lg" onClick={() => this.props.fromParent(row.key2)} >{row.key2}</Button>
                        </ButtonGroup> : <ButtonGroup size="lg">
                                <Button outline color={row.class1} size="lg" onClick={() => this.props.fromParent(row.key1)} >{row.key1}</Button>
                                <Button outline color={row.class2} size="lg" onClick={() => this.props.fromParent(row.key2)} >{row.key2}</Button>
                                <Button outline color={row.class3} size="lg" onClick={() => this.props.fromParent(row.key3)} >{row.key3}</Button>
                                <Button outline color={row.class4} size="lg" onClick={() => this.props.fromParent(row.key4)} >{row.key4}</Button>
                            </ButtonGroup>}
                    </div>
                })}
            </div>
        )
    }
}
export default KeyPad;
