
import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <Container>
                    <Row>

                   <div className="text-center col">
                   <p>All right reserved. GSA 2019.</p>
                   </div>
                    </Row>
                </Container>
            </footer>
        );
    }
}
export default Footer;