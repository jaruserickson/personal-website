// @flow
import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import Title from './components/Title'
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
                <div className={'subcontainer'}>
                    <Title>education</Title>
                    <Section
                        title={'University of Toronto'}
                        subtitle={'Computer Science'}
                        time={'September 2015 - May 2020'}
                        content={'focuses in Artificial Intelligence and Computer Vision'}
                    />

                    <Title>work experience</Title>
                    <Section
                        title={'KOMBINE AI'}
                        subtitle={'Junior Full Stack Developer'}
                        time={'May 2017 - August 2017'}
                        content={'content'}
                    />

                    <Title>extracurriculars</Title>
                    <Section
                        title={'uoft counter-strike club'}
                        subtitle={'lead web dev'}
                        time={'January 2017 - current'}
                        content={'content'}
                    />
                    <Section
                        title={'uoft esports club'}
                        subtitle={'lead web dev'}
                        time={'January 2017 - current'}
                        content={'content'}
                    />
                </div>
            </div>
        )
    }
}

export default App
