import React, { Component } from 'react';
import LaptopItem1 from "./LaptopItem1";
import LaptopItem2 from "./LaptopItem2";
import LaptopItem3 from "./LaptopItem3";
import LaptopItem4 from "./LaptopItem4";

class LaptopContainer extends Component {
    render() {
        return (
        <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
            <h1 className="text-center">BEST LAPTOP</h1>
            <div className="row">
                <LaptopItem1 />
                <LaptopItem2 />
                <LaptopItem3 />
                <LaptopItem4 />
            </div>
        </section>

        );
    }
}

export default LaptopContainer;