import React, { Fragment } from 'react'

export const Home = (props) => {
    const { content } = props;
    return <h1>{content.headline}</h1>
}

export const Chapter = (props) => {
    const { location } = props;
    return renderContent(location.state)
}

function renderContent(object) {
        let content = (
            <Fragment>
                <h1>{object.title}</h1>
                <ul>
                    {
                        object.sections.map((section, i) => {
                            return <li key={i}>{section}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
        return content
}