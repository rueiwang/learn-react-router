import React, { Component } from 'react'
import { Home, Chapter, ReactChapter, ReduxChapter} from './component/pages'
import { Navbar, BackToHome } from './component/links'
import { Route } from 'react-router-dom'


class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            headline: null,
            chapters: []
        }
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
        return (
            <div className="container">
                <Navbar content={this.state}/>
                {
                    this.state.chapters.map((chapter) => {
                        const prefixKey = '/' + chapter.key;
                        return (
                            <Route path={prefixKey} component={Chapter} key={chapter.key}/>
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

export default App;