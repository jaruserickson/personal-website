// @flow
import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Section from './components/Section'

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <Header 
                  name={'jacob erickson'}
                  title={'software engineer'}
                  videoUri={'https://s3.amazonaws.com/jaruserickson/broll.mp4'}
                  social={{
                    github: 'jaruserickson',
                    instagram: 'jaruserickson',
                    resume: 'path-to-resume',
                    linkedin: 'jaruserickson',
                    lastfm: 'jarus_e'
                  }}
                />
                <Section
                    title={'education'}
                    subtitle={'University of Toronto'}
                    time={'September 2015 - May 2020'}
                    content={'content'}
                />
                <Section
                    title={'work experience'}
                    subtitle={'KOMBINE AI'}
                    time={'May 2017 - August 2017'}
                    content={'content'}
                />
            </div>
        )
    }
}

export default App
