import React from "react";
import {BiCommentCheck, BiMessage} from 'react-icons/bi'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {TbArrowBigTop} from 'react-icons/tb'
import {MdGeneratingTokens} from 'react-icons/md'
const About = () => (
	<div className="c_about_dv">
		<h2>About</h2>
		<div> <HiOutlineUserGroup /> &nbsp; 246 Experts </div>
		<div> <BiMessage /> &nbsp; 100k Questions and Answers </div>
		<div> <TbArrowBigTop /> &nbsp; 50k Upvotes </div>
		<div> <MdGeneratingTokens /> &nbsp; 145 Tokens Awarded </div>
	</div>
);

export default About;
