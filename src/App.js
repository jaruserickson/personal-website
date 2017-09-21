// @flow
import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <Header 
                  name={'jacob erickson'}
                  title={'software engineer'}
                  videoUri={'https://s3.amazonaws.com/jaruserickson/newer_broll.mp4'}
                  social={{
                    github: 'jaruserickson',
                    instagram: 'jaruserickson',
                    resume: 'resume.pdf',
                    linkedin: 'jaruserickson',
                    lastfm: 'jarus_e'
                  }}
                />
            </div>
        )
    }
}

export default App
