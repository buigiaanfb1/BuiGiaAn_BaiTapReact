import React, { Component } from 'react';
import LapItem4 from "./../../../assets/img/lt_lenovo.png"

class LaptopItem4 extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card bg-light" style={{width: 300}}>
                    <img className="card-img-top" src={LapItem4} alt="Card image" style={{maxWidth: '100%', height: 250}} />
                    <div className="card-body text-center">
                    <h4 class="card-title text-center">LENOVO THINKPAD</h4>
                    <p class="card-text">The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012</p>
                    <a href="#" class="btn btn-primary">Detail</a>
                    <a href="#" class="btn btn-danger">Cart</a>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default LaptopItem4;