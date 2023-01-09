import React from "react";
import { useEffect, useState,useRef } from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'
const QCreate = () => 
{
	const navigate = useHistory();
	const inputFile = useRef(null) 
	const [title, setTitle]=useState('');	
	const [desc, setDesc]=useState('');
	const handleTitleChange = event => {
		// 👇️ access textinput value
		setTitle(event.target.value);
	};
	const handleDescChange = event => {
		// 👇️ access textarea value
		setDesc(event.target.value);
	};	
	const postques=()=>{
		if(title!=''&& desc!=''){
			const user={
				title,
				description:desc,
				completed:true
			}
			axios.post(`http://localhost:8000/api/users/`,user)
			.then(res => {
			  const persons = res.data;
			  console.log(persons)
			  navigate.push("/list");
			})
		}
		else
			window.alert("Question Input can't be Empty")
	}
	const fileopen=()=>{
		inputFile.current.click();
	}
	const onchangefile=(e)=>{
		console.log(e.target.files)
	}
return (
	<div className="c_qcreate_dv">
		<h2 className="questionborder">New Question</h2>
		<div>
			<input className="textques" type="text" value={title} placeholder="Enter the question title" onChange={handleTitleChange}/>
			<div className="textareaques">
				<textarea placeholder="Write your question here" rows={5} value={desc} onChange={handleDescChange}>				
				</textarea>
				<div className="attachpost">
					<div className="attaching">
						<span><b>Aa</b></span>
						<svg className="attachfile" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={fileopen}>
							<path d="M13.3333 1.33333H5.33333C4.598 1.33333 4 1.93133 4 2.66666V10.6667C4 11.402 4.598 12 5.33333 12H13.3333C14.0687 12 14.6667 11.402 14.6667 10.6667V2.66666C14.6667 1.93133 14.0687 1.33333 13.3333 1.33333ZM5.33333 10.6667V2.66666H13.3333L13.3347 10.6667H5.33333Z" fill="black"/>
							<path d="M2.66671 5.33333H1.33337V13.3333C1.33337 14.0687 1.93137 14.6667 2.66671 14.6667H10.6667V13.3333H2.66671V5.33333Z" fill="black"/>
							<path d="M8 7.99999L7.33333 7.33333L6 9.33333H12.6667L10 5.33333L8 7.99999Z" fill="black"/>
						</svg>
						<input id="inputFile" type="file" ref={inputFile} style={{display:'none'}} onChange={onchangefile}/>
					</div>
					<a className="postbutton" type="button" onClick={postques}>Post</a>
				</div>
			</div>
		</div>
	</div>
)};

export default QCreate;
