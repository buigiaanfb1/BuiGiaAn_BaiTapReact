import React, { Component } from 'react';
import LapItem3 from "./../../../assets/img/lt_hp.png"

class LaptopItem3 extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card bg-light" style={{width: 300}}>
                    <img className="card-img-top" src={LapItem3} alt="Card image" style={{maxWidth: '100%', height: 250}} />
                    <div className="card-body text-center">
                    <h4 class="card-title text-center">HP OMEN</h4>
                    <p class="card-text">A young global smartphone brand focusing on introducing perfect sound quality</p>
                    <a href="#" class="btn btn-primary">Detail</a>
                    <a href="#" class="btn btn-danger">Cart</a>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default LaptopItem3;