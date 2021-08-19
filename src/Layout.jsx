import React from "react";
import Header from './Header';
import { createGlobalStyle } from 'styled-components';

const mainBoxStyle = {
    width: "100%"
}

const GlobalLayoutStyle = createGlobalStyle`
    body { 
        background: #FFFFFF;
        font: 11px menlo;
        color: #2C4251;
        margin-top: 0;
        margin-right: 0;
        margin-left: 0;
        height: 100%;
        overflow: auto;

        :not(pre) > code {
            padding: 3px 5px;
            color: #111111;
            border-radius: 3px;
            background: #f5f2f0;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: menlo;
            font-weight: 600;
        }

        h1 {
            font-size: 1.7em;
            line-height: 40px;
        }

        h3 {
            font-size: 1.4em;
        }

        a {
            text-decoration: none;
            color: #E7BB41;
        }

        .box {
            display: flex;
            height: 100%;
        }
    }
`

const Layout = props => {
    return (
        <div className = "top">
            <GlobalLayoutStyle />
            <Header />
            <div className={props.className} style={mainBoxStyle}>
                {props.children}
            </div>
        </div>
    );
}


export default Layout;