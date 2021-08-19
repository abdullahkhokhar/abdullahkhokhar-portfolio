/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import styled from "styled-components";
import Messenger from "./Components/Messenger";

const news = ['Abdullah Khokhar', 'UofT CS Specialist', 'Software Developer', 'Cricket Lover'];
const today = new Date().toLocaleDateString()

const Landing = ({ className }) => (
	<div className={className}>
		<div className="container">
			<div className="container-bottom">
				<p><strong>[abdullahkhokhar ~]$</strong> echo <b>$WELCOME</b></p>
				<p>Welcome, my name is Abdullah Khokhar! you've come to my portfolio.</p>
				<p><strong>[abdullahkhokhar ~]$</strong> status</p>


				<div className="ascii-box">
                <pre className="ascii">
                ______         __    __<br />
 /      \       |  \  /  \<br />
|  $$$$$$\      | $$ /  $$ <br />
| $$__| $$      | $$/  $$  <br />
| $$    $$      | $$  $$   <br />
| $$$$$$$$      | $$$$$\   <br />
| $$  | $$      | $$ \$$\  <br />
| $$  | $$      | $$  \$$\ <br />
 \$$   \$$       \$$   \$$<br /></pre>
				<ul className="fetch-info">
					<li><strong className="name info">abdullahkhokhar</strong></li>
					<li>-------------</li>
					<li><strong className="info">OS</strong>: macOS x86_64</li>
					<li><strong className="info">Kernel</strong>: 10.0.0-popcorn</li>
					<li><strong className="info">Date</strong>: {today}</li>
					<li><strong className="info">Shell</strong>: bash 5.0.11</li>
					<li><strong className="info">Status</strong>: Searching for Internship</li>
					<br />
					<li className="palette">
						<div className="palette-box colour-1"></div>
						<div className="palette-box colour-2"></div>
						<div className="palette-box colour-3"></div>
						<div className="palette-box colour-4"></div>
						<div className="palette-box colour-5"></div>
					</li>
				</ul>
				</div>


				<p><strong>[abdullahkhokhar ~]$</strong> social</p>
				<ul>
                <li className="social-list"><a className="social-a"href="http://github.com/abdullahkhokhar" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                <li className="social-list"><a className="social-a"href="http://linkedin.com/in/abdullah-k/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li className="social-list"><a className="social-a"href="https://medium.com/@abdullahk786.cs" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium" aria-hidden="true"></i></a></li>
            	</ul>
				<p><strong>[abdullahkhokhar ~]$</strong> whoami</p>
				<p><Messenger news={news}/></p>
			</div>
		</div>
	</div>
);

const StyledLanding = styled(Landing)`
	.social-list {
		list-style-type: none;
		display: inline;
		padding-right: 5%;
	}

	.social-list i {
		color: #363537;
		padding: 3px;
		text-align: center;
		font-size: 1.3em;
	}

	.social-list i:hover {
		transform: scale(1.3, 1.3);
	}

	.palette {
		display: inline;
	}

	.palette-box {
		display: inline;
		float: left;
		width: 16%;
		height: 8px;
		min-width: 10%;
	}

	.colour-1 {
		background: #BF1A2F;
	}

	.colour-2 {
		background: #E7BB41;
	}

	.colour-3 {
		background: #FFFFFF;
	}

	.colour-4 {
		background: #F5F2F0;
	}

	.colour-5 {
		background: #363537;
	}

	.name {
		color: #BF1A2F;
	}

	.info {
		color: #BF1A2F;
	}

	.ascii {
		font-family: monospace;
		white-space: pre;
		text-align: center;
		flex: 1 1 auto;
		padding: 0em;
	}

	.fetch-info {
		list-style-type: none;
		flex: 1 1 auto;
		padding: 0px;
	}

	.ascii-box {
		display: flex;
	}

	.box {
		height: 100%;
	}

	.container {
		font-size: 1.2em;
		width: 56%;
		min-width: 470px;
		min-height: 450px;
		background: #FFFFFF;
		color: #363537;
		margin: 3em auto;
		padding-right: 100px;
		padding-left: 100px;
	}

	.info-p {
		position: relative;
		top: 50%;
		padding-left: 10%;
	}
`;

export default StyledLanding;
