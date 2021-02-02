import React, { Component } from 'react';
import Carousel from '../carousel';
import LaptopContainer from '../LaptopContainer';
import Nav from '../nav';
import PhoneContainer from '../PhoneContainer';
import PromoteContainer from '../PromoteContainer';

class Home extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Nav />
                <Carousel />
                <PhoneContainer />
                <LaptopContainer />
                <PromoteContainer />
            </div>
        );
    }
}

export default Home;