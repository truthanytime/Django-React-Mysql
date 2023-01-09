import React from "react";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import QCreate from './sub/QCreate';
import About from './sub/About';
import Experts from './sub/Experts';

const Create = () => (
	<div className="c_home_dv c_content">
            <Row>
                <Col md={8}>
                    <QCreate />
                </Col>
                <Col md={4}>
                    <About />
                    <Experts />
                </Col>
            </Row>
        </div>
    );

export default Create;
