// @flow
import React, { Component } from 'react'
import Video from './Video'

import './css/Header.css'

export default class Header extends Component {
    render() {
        const {
            name
        } = this.props

        const videoOptions = {
            autoplay: true,
            controls: false,
            loop: true,
            muted: true,
            fluid: true,
            loadingSpinner: false,
            preload: 'auto',
            sources: [{
                src: 'https://s3.amazonaws.com/jaruserickson/broll.mp4',
                type: 'video/mp4'
            }]
        }

        return (
            <div className={'container'}>
                <Video { ...videoOptions } />
                <p className={'name'}>{name}</p>
            </div>
        )
    }
    
}
