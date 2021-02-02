import React, { Component } from 'react';
import Promotion1 from "./../../../assets/img/promotion_1.png"

class PromoteItem1 extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="container">
                    <img src={Promotion1} alt="Promote" style={{maxWidth: '100%'}} />
                </div>
            </div>
        );
    }
}

export default PromoteItem1;