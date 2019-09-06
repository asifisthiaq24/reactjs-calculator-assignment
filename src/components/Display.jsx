import React from 'react';
import '../components_css/Display.css';
import { Input, Row, Col } from 'reactstrap';

class Display extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { result } = this.props;
        return (
            <div class="forMainDivDisplay">
                <p>{result}</p>
            </div>
        )
    }
}
export default Display;
