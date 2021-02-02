import React, { Component } from 'react';
import Pic2 from "./../../../assets/img/sp_note7.png"

class PhoneItem2 extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
            <div className="container">
                <div className="card bg-light" style={{width: 300}}>
                <img className="card-img-top" src={Pic2} alt="Card image" style={{maxWidth: '100%', height: 250}} />
                <div className="card-body text-center">
                <h4 class="card-title text-center">Galaxy Note7</h4>
                <p class="card-text">The Galaxy Note7 comes with a perfectly symmetrical design for good reason</p>
                <a href="#" class="btn btn-primary">Detail</a>
                <a href="#" class="btn btn-danger">Cart</a>
                </div>
                </div>
            </div>
            </div>

        );
    }
}

export default PhoneItem2;