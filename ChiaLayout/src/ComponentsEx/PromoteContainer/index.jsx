import React, { Component } from 'react';
import PromoteItem1 from "./PromoteItem1";
import PromoteItem2 from "./PromoteItem2";
import PromoteItem3 from "./PromoteItem3";

class PromoteContainer extends Component {
    render() {
        return (
            <section id="promotion" className="container-fluid pt-5 pb-5">
                <h1 className="text-center text-white">PROMOTION</h1>
                <div className="row">
                    <PromoteItem1 />
                    <PromoteItem2 />
                    <PromoteItem3 />
                </div>
            </section>

        );
    }
}

export default PromoteContainer;