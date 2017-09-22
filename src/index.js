import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/Header'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Header 
                    name={'jacob erickson'}
                    title={'software engineer'}
                    videoUri={'https://s3.amazonaws.com/jaruserickson/jarusericksonbackroller.mp4'}
                    social={{
                        github: 'jaruserickson',
                        instagram: 'jaruserickson',
                        resume: 'https://s3.amazonaws.com/jaruserickson/resume.pdf',
                        linkedin: 'jaruserickson',
                        lastfm: 'jarus_e'
                    }}
                />, document.getElementById('root'))
registerServiceWorker()
