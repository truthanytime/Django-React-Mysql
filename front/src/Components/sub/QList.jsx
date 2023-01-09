import React from "react";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiArrowFromBottom } from 'react-icons/bi'
import {ImArrowUp} from 'react-icons/im'
import ExpertImg from "../../assets/imgs/expert.png"
import { useEffect, useState } from "react";
import axios from 'axios'

const QList = () =>{
	const [title, setTitle]=useState('');	
	const [desc, setDesc]=useState('');
	const [persons, setPersons]=useState([]);
	useEffect(()=>{
		axios.get(`http://localhost:8000/api/users/`)
		.then(res => {
			setPersons(res.data);
		  })
	},[])
	return (
	<div className="c_qlist_dv">
		{persons.map((person)=>(
			
		<div className="c_qlist_index">
			<div className="c_ql_tlt">{person.title}</div>
			<div className="c_ql_cnt">{person.description}</div>
			<div className="c_ql_by">Asked by:</div>
			<Row>
				<Col md={1}><img src={ExpertImg} /></Col>
				<Col md={11}>
					<div className="c_expert_item_tlt img_blank">Pseudo Near Expert</div>
					<div className="img_blank">47 <strong><ImArrowUp style={{opacity:0.7}} /></strong> &nbsp;&nbsp;&nbsp; collected</div>
				</Col>
			</Row>
		</div>

		))}
	</div>
)};

export default QList;
