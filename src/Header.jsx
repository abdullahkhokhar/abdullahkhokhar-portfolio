import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Header = props => {
    const location = useLocation(); 
    return(
        <nav className={props.className}>
            <ul className="nav-ul">
                <li>
                    <Link to="/" className={location.pathname !== "/about" ? "active" : ""}>home</Link>
                </li>
                <li>
                    <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>about</Link>
                </li>
                <li>
                    <Link to="/blog" className={location.pathname === "/blog"  ? "active" : ""}>blog</Link>
                </li>
                <li>
                    <a target="_blank" href="https://drive.google.com/file/d/16Ow_P9XZHg7-v16V713NpK0nRZ-VZXDj/view?usp=sharing">resume</a>
                </li>
            </ul>
        </nav>
    )
}

const StyledHeader = styled(Header)`
    nav {
        font-family: monospace;
        height: 2em;
        vertical-align: center;
        padding-right: 80px;
        padding-left: 80px;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 3em;
        align-content: center;
    }

    .nav-ul {
        list-style-type: none;
        text-align: center;
        font-size: 1.3em;
        padding: 0px 20px;
        margin: 2em 0em 0em 0em;
    }

    li {
        display: inline-block;
        font-family: monospace;
    }

    a {
        text-decoration: none;
        display: inline-block;
        margin: 0px 20px;
        padding: 2px 10px;
        color: #393E41;
    }

    a:before, a:after {
        content: "";
        transition: width 0.2s ease-in;
        width: 0px;
        opacity: 0;
        background-color: #E7BB41;
        left: 0;
        position: relative;
        display: block;
    }

    a:hover {
        cursor: pointer;
        transition: width 0.2s ease-in;
    }

    a:hover:before, a:hover:after {
        width: 100%;
        opacity: 1;
    }

    a:after {
        height: 2px;
    }

    .active:before, .active:after {
        content: "";
        width: 100%;
        opacity: 1;
        background-color: #E7BB41;
        top: 0;
        position: relative;
        display: block;
    }

    .active:after {
        height: 2px;
    }
`;

export default StyledHeader;