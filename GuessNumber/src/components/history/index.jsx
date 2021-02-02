import React, { Component } from 'react';

class History extends Component {
    render() {
        return (
                <h3>Lần {this.props.times}: {this.props.guessNumber}</h3>
        );
    }
}

export default History;