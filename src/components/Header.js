// @flow
import React, { Component } from 'react'
import Video from './Video'
import Social from './Social'

import './css/Header.css'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { width: '0', height: '0' };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const {
            name,
            title,
            videoUri,
            social
        } = this.props

        const {
            width,
            height
        } = this.state

        let thisWidth = 1280
        let thisHeight = 720
        if (!( width <= 1280 && height <= 720)){
            if (width > 1280 && height < 1280) {
                console.log('fluid')
                thisWidth = width
                thisHeight = Math.ceil((8 * width) / 9)
            } else {
                console.log('anti-fluid')
                thisWidth = Math.ceil((16 * height) / 9)
                thisHeight = height
            }
        }

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
                <div style={{width: thisWidth, height: thisHeight, position: 'absolute', top: 0}}>
                    <Video { ...videoOptions }/>
                </div>
                <div style={{position: 'absolute', zIndex: 1, top: 0, width: thisWidth, height: thisHeight}}/>
                <div className={'textcontainer'}>
                    <p className={'name'}>{name}</p>
                    <p className={'title'}>{title}</p>
                    <Social {...social} />
                </div>
            </div>
        )
    }
    
}
