import React, { Component } from 'react';

class Databinding extends Component {
    address = "82 Ung Van Khiem, Binh Thanh";
    state = {
        isFine: true,  
    }

    displayDestination = () => {
        if ( this.state.isFine) {
            return <p>CyberSoft</p>
        }
        return <p>CyberCore</p>
    }

    decideDestination = (isFine) => {
        return () => {
            this.setState({
                isFine, 
            })
            
        }
    }

    showMessage = () => {
        alert('Hello world!');
    }

    showMessageWithThis = () => {
        alert(this.address);
    }

    showMessageWithParams = (message) => {
        // Function return another function called Closure
        // onClick will receive a small function then when we clicked it will run
        // arrow function
        return () => {
            alert(message);
        }
    }

    render() {
        // const lecturer = "CORONA";
        return (
            <div>
                <button onClick={this.decideDestination(true)}>Fine</button>
                <button onClick={this.decideDestination(false)}>Sick</button>
                {this.displayDestination()}
                {/* <h1>CyberSoft</h1>
                <p>{this.address}</p>
                <p>{lecturer}</p>
                <button onClick={this.showMessage}>Show message</button>
                <button onClick={this.showMessageWithThis}>Show message with this</button>
                <button onClick={this.showMessageWithParams("Hello")}>Show message with 
                this</button> */}
                
            </div>
        );
    }
}

export default Databinding;