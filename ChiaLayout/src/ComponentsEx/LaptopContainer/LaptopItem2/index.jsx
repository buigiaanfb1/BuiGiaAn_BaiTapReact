import React, { Component } from 'react';
import LapItem2 from "./../../../assets/img/lt_rog.png"

class LaptopItem2 extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card bg-light" style={{width: 300}}>
                    <img className="card-img-top" src={LapItem2} alt="Card image" style={{maxWidth: '100%', height: 250}} />
                    <div className="card-body text-center">
                    <h4 class="card-title text-center">ASUS ROG</h4>
                    <p class="card-text">the Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices</p>
                    <a href="#" class="btn btn-primary">Detail</a>
                    <a href="#" class="btn btn-danger">Cart</a>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default LaptopItem2;