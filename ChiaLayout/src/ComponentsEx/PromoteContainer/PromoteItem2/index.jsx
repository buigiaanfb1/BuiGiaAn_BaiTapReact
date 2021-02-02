import React, { Component } from 'react';
import Promotion2 from "./../../../assets/img/promotion_2.png"

class PromoteItem2 extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="container">
                    <img src={Promotion2} alt="Promote" style={{maxWidth: '100%'}} />
                </div>
            </div>
        );
    }
}

export default PromoteItem2;