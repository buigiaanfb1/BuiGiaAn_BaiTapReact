import React, { Component } from 'react';
import PhoneItem1 from "./PhoneItem1"
import PhoneItem2 from "./PhoneItem2"
import PhoneItem3 from "./PhoneItem3"
import PhoneItem4 from "./PhoneItem4"

class PhoneContainer extends Component {
    render() {
        return (
            <section id="smartphone" className="container-fluid pt-5 pb-5">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div class="row">
                    <PhoneItem1 />
                    <PhoneItem2 />
                    <PhoneItem3 />
                    <PhoneItem4 />
                </div>
            </section>
        );
    }
}

export default PhoneContainer;