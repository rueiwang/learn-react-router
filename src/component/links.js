import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = (props) => {
    const { content } = props;
    return (
        <div className="nav">
        {
            content.chapters.map((item) => {
                return (
                    <Link to={{
                        pathname: item.key,
                        state: item
                        }} key={item.title}>{item.title}</Link>
                )
            })
        }
        </div>
    )
}

export const BackToHome = () => {
    return (
        <div className="back">
            <Link to="/">回首頁</Link>
        </div>
    )
}