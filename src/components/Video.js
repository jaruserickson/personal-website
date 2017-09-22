import React, { Component } from 'react'
import videojs from 'video.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './css/Video.css'

export default class VideoPlayer extends Component {
    state = {
        visible: true
    }

    componentDidMount() {
        this.player = videojs(this.videoNode, this.props, () => {})
            .ready(() => {
                this.setState({visible: false})
            })
    }

    componentWillReceiveProps(nextProps) {
        this.player = videojs(this.videoNode, nextProps, () => {})
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    render() {
        return (
            <div data-vjs-player>
                <video ref={ (node) => { this.videoNode = node } } className="video-js"/>
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    { this.state.visible && <div className="overlay"/> }
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}