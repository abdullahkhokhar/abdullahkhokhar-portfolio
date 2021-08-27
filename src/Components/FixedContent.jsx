import React from "react";
import styled from "styled-components";
import headshot from "../assets/headshot.jpg";

const FixedContent = props => {
    return (
        <div className={props.className}>

        <div className="main-box">
            {props.children}

            <div className="sitemap">
                <img src={headshot} alt="me" width="120" height="auto" />
				<p><a href="mailto:abdullahk786@hotmail.com" target="_blank" rel="noreferrer"><span className="email-icon" >📧 </span><span className="email">abdullahk786@hotmail.com</span></a></p>
				<p className = "phone"><strong>📞</strong> 647-534-4472</p>
            </div>

        </div>

        </div>
    );
}

const StyledMainContent = styled(FixedContent)`
    .main-box {
        width: 100%;
    }

    .sitemap > p {
        margin: 0;
    }

    .sitemap {
        position: fixed;
        bottom: 14px;
        left: 14px;
    }

    .email {
        font-weight: bold;
    }

    .email-icon{
        font-size: 14px;
    }

    @media only screen and (max-width: 800px) {
        .sitemap > img, .email, .phone {
          display: none;
        }

        .email-icon{
            font-size: 30px;
        }

        .sitemap {
            bottom: 4px;
        }

    }
`

export default StyledMainContent;