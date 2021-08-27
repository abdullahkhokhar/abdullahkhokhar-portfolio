/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

const About = ({ className }) => (
    <div className={className}>
        <div className="container">
            <div className="container-bottom">
                <p><strong>[abdullahkhokhar ~]$</strong> cat about.md</p>
                <p>Hey, it's nice to meet you.</p>
                <p>My name is Abdullah Khokhar. I’m a 21 year old in my final year at the <strong className="uoft">University of Toronto</strong>, enrolled in the Specialist Computer Science program.</p>
                <br />
                <p>I’ve recently concluded an internship as a Software Development Engineer at <a href="https://aws.amazon.com" target="_blank">AWS</a>, part of the AWS Insights and Commerce Platform organization. During this time, I designed, engineered, and launched a web application enabling the interaction with key AWS Commerce Platform owned services, providing access to AWS invoice details and enabling the ability to perform various statement modifications.</p>
                <p>I also proudly designed a server-less stack for the application’s infrastructure, making use of AWS Services such as 
                    <a href="https://aws.amazon.com/route53/" target="_blank"> Route 53</a>, 
                    <a href="https://aws.amazon.com/api-gateway/" target="_blank"> API Gateway</a>, 
                    <a href="https://aws.amazon.com/lambda/" target="_blank"> Lambda</a>, 
                    <a href="https://aws.amazon.com/s3/" target="_blank"> S3</a>, 
                    <a href="https://aws.amazon.com/cloudfront/" target="_blank"> CloudFront</a>, 
                    <a href="https://aws.amazon.com/cloudformation/" target="_blank"> CloudFormation</a>, etc.</p>
                <p>Prior to this, I was a Full Stack Software Developer Intern part of the <a href="https://www.oracle.com/ca-en/cx/marketing/automation/" target="_blank"> Oracle Eloqua Cloud</a> Organization where I contributed to the development and integration of applications (e.g. Salesforce, Facebook, Instagram) with the Marketing Cloud.</p>
                <p>Check out my <a target="_blank" href="https://drive.google.com/file/d/16Ow_P9XZHg7-v16V713NpK0nRZ-VZXDj/view?usp=sharing"> resume</a> for more details about my endeavours!</p>
                <br />
                <p>I love to play Cricket🏏, it’s something I live and breathe.</p> 
                <p>During the summer between 6:00am-8:00pm I’m almost never home, I’m out playing multiple games in Ontario’s domestic Cricket setup. Check me out on <a href="https://www.youtube.com/channel/UCsxEj2EH_yEdcbdCJ2-Dr1g" target="_blank"> youtube</a>, you’ll find some videos of me playing!</p>
                <ul>
                    <li>Email: <a href="mailto:abdullahk786@hotmail.com" target="_blank" rel="noreferrer"> abdullahk786@hotmail.com</a></li>
                    <li>Phone Number: (647) 534-4472</li>
                </ul>
            </div>
        </div>
    </div>
);

const StyledAbout = styled(About)`
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

    .title {
        font-size: 1em;
        padding-bottom: 0.6em;
        color: #E6EBE0;
    }

    li {
        list-style-type: none;
        padding: 0.2em;
    }

    a {
        text-decoration: none;
        font-weight: bold;
        color: #E7BB41;
    }

    .uoft {
        color: #042b5b;
    }
`;

export default StyledAbout;
