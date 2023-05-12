import React from 'react';
import Formular from "./Formular";
import{Container,Row,Col} from "react-bootstrap";

const Main = () => {
    return (
        <Container fluid className="mt-5 border border-success w-50" >
            <Row className="justify-content-md-center">
                <Col xxl="4">
                    <Formular/>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;