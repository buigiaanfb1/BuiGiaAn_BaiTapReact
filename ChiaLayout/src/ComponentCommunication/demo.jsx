import React, { Component } from 'react';

class Demo extends Component {
    render() {
        return (
            <div>
                <p>username: {this.props.data.name}</p>
                <p>age: {this.props.data.age}</p>
            </div>
        );
    }
}

export default Demo;