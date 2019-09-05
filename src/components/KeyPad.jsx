import React from 'react';
import '../components_css/KeyPad.css';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

class KeyPad extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const elements = this.props.keypadObj;
        return (
            <div class="forMainDiv">
                {elements.map((row, index) => {
                    return <div>
                        {row.index == 1 ? <ButtonGroup size="lg">
                            <Button outline color={row.class1} size="lg" >{row.key1}</Button>
                            <Button outline color={row.class2} size="lg" >{row.key2}</Button>
                        </ButtonGroup> : <ButtonGroup size="lg">
                                <Button outline color={row.class1} size="lg" >{row.key1}</Button>
                                <Button outline color={row.class2} size="lg">{row.key2}</Button>
                                <Button outline color={row.class3} size="lg">{row.key3}</Button>
                                <Button outline color={row.class4} size="lg" >{row.key4}</Button>
                            </ButtonGroup>}
                    </div>
                })}
            </div>
        )
    }
}
export default KeyPad;
