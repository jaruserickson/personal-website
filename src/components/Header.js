// @flow
import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Video from './Video'
import Social from './Social'

import './css/Header.css'

export default class Header extends Component {
    render() {
        const {
            name,
            title,
            videoUri,
            social
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
                src: videoUri,
                type: 'video/mp4'
            }]
        }

        return (
            <div className={'container'}>
                <Video { ...videoOptions } />
                
                <div className={'textcontainer'}>
                    <p className={'name'}>{name}</p>
                    <p className={'title'}>{title}</p>
                    <Social {...social} />
                </div>
            </div>
        )
    }
    
}
