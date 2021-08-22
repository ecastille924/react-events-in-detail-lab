import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>click meh</button>
        )
    }
}
// Code CoordinatesButton Component Here
