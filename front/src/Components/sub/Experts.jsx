import React from "react";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImArrowUp } from 'react-icons/im'

import ExpertImg from "../../assets/imgs/expert.png"

const Experts = () => (
	<div className="c_expert_dv">
		<h2>Experts</h2>
		<Row>
			<Col md={2}><img src={ExpertImg} /></Col>
			<Col md={10}>
				<div className="c_expert_item_tlt img_blank">Pseudo Near Expert</div>
				<div className="img_blank">47 <strong><ImArrowUp style={{opacity:0.7}}/></strong> &nbsp;&nbsp;&nbsp; collected</div>
			</Col>
		</Row>
		<Row>
			<Col md={2}><img src={ExpertImg} /></Col>
			<Col md={10}>
				<div className="c_expert_item_tlt img_blank">Near Expert</div>
				<div className="img_blank">47 <strong><ImArrowUp style={{opacity:0.7}} /></strong> &nbsp;&nbsp;&nbsp; collected</div>
			</Col>
		</Row>
		<Row>
			<Col md={2}><img src={ExpertImg} /></Col>
			<Col md={10}>
				<div className="c_expert_item_tlt img_blank">Bitcoin Maxi</div>
				<div className="img_blank">47 <strong><ImArrowUp style={{opacity:0.7}} /></strong> &nbsp;&nbsp;&nbsp; collected</div>
			</Col>
		</Row>
		<Row>
			<Col md={2}><img src={ExpertImg} /></Col>
			<Col md={10}>
				<div className="c_expert_item_tlt img_blank">Ethereum Maxi</div>
				<div className="img_blank">47 <strong><ImArrowUp style={{opacity:0.7}} /></strong> &nbsp;&nbsp;&nbsp; collected</div>
			</Col>
		</Row>
	</div>
);

export default Experts;
