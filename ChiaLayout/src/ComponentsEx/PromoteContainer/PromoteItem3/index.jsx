import React, { Component } from 'react';
import Promotion3 from "./../../../assets/img/promotion_3.jpg"

class PromoteItem3 extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="container">
                    <img src={Promotion3} alt="Promote" style={{maxWidth: '100%'}} />
                </div>
            </div>
        );
    }
}

export default PromoteItem3;