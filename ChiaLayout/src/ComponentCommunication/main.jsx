import React, { Component } from 'react';
import Demo from './demo';

class Main extends Component {
    user = {
         name: "Hieu",
         age: 12,
    }
    render() {
        return (
            <div>
                <Demo data={this.user} />
            </div>
        );
    }
}

export default Main;