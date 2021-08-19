/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const About = ({ className }) => (
    <div className={className}>
        <div className="container">
            <div className="container-bottom">
                <p><strong>[abdullahkhokhar ~]$</strong> cat about.md</p>
                <p>Hey, it's nice to meet you.</p>
                <p>I'm a software developer intern at <a href="#" target="_blank">Amazon</a> and a student in <a href="https://engsci.utoronto.ca/explore_our_program/about_engsci/" target="_blank">Engineering Science at the University of Toronto</a>.</p>
                <br />
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
`;

export default StyledAbout;
