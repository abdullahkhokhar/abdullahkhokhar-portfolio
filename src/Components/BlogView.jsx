import React from "react"
import styled from "styled-components";
import PostListItem from "./PostListItem"
import blogPosts from "../assets/blogPosts";

const BlogView = ({ className }) => {

    const posts = blogPosts.map(post => {
        return <PostListItem
            title={post.title}
            date={post.date}
            tags={post.tags}
            link={post.link}
        />
    })

    return(
        <div className={className}>
        <div className="container">
            <p><strong>[abdullahkhokhar ~]$</strong> ls -lt</p>
            <ul>
                {posts}
            </ul>
        </div>
        </div>
    )
}

const StyledBlogView = styled(BlogView)`
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

    ul {
        list-style-type: none;
        padding-left: 0px;
    }
`;

export default StyledBlogView;