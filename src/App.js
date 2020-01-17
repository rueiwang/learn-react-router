import React, { Component } from 'react'
import { Home, Chapter } from './component/pages'
import { Navbar, BackToHome } from './component/links'
import { Route } from 'react-router-dom'


class App extends Component {
    constructor(props) {
        super(props)
        this.state=null
    }

    componentDidMount() {
        fetch('https://cwpeng.github.io/live-records-samples/data/content.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                headline: data.headline,
                chapters: data.chapters
            })
        })
    }

    render() {
        if (this.state === null) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="container">
                    <Navbar content={this.state}/>
                    {
                        this.state.chapters.map((chapter, i) => {
                            const prefixKey = '/' + chapter.key;
                            return (
                                <Route path={prefixKey} component={Chapter} key={i}/>
                            )
                        })
                    }
    
                    <Route path="/" exact render={(routeProps) => {
                        return <Home content={this.state} />
                    }} />
                    <BackToHome />
                </div>
            )
        }
    }
}

export default App;