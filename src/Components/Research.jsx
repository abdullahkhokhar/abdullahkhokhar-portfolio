import React from "react";
import styled from "styled-components";

const Research = ({ className }) => (
    <div className={className}>
        <div className="container">
            <div className="container-bottom">
                <p><strong>[abdullahkhokhar ~]$</strong> cat research.md</p>
                <br/>
                <p className="title">"StockIO" - Predictive and Prescriptive Analytics for Financial Market Solutions</p>
                <ul>Analyze historic stock market trends and develop a StockTradingBot.</ul>
                <ul><a href="https://www.michaelliut.ca/uploads/2/1/0/3/21032302/final_report_milltop.pdf" target="_blank">Read Our Report!</a></ul>
                
                <br/>
                <p className="title">Database Makeover: Improvements to the Online Teaching of Database Systems</p>
                <ul>This project focuses on the redesign of pedagogical/andragogical materials for a third-year database systems course in the attempts to provide more experiential material to students while learning online.</ul>
                <ul><a href="https://www.michaelliut.ca/projects.html" target="_blank">More Details.</a></ul>
            </div>
        </div>
    </div>
);

const StyledResearch = styled(Research)`
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
        text-decoration: none;
        color: #363357;
        // color: #BF1A2F;
        // color: #363357;
        font-weight: bold;
        color: #E7BB41;
        min-width: 300px;
    }

    li {
        list-style-type: none;
        padding: 0.2em;
    }

    a {
        text-decoration: underline;
        font-weight: bold;
        color: #7E8F97;
    }

    .uoft {
        color: #042b5b;
    }
`;

export default StyledResearch;