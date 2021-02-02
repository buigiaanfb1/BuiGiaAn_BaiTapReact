import React, { Component } from 'react';
import redCar from './../assets/images/products/red-car.jpg';
import steelCar from './../assets/images/products/steel-car.jpg';
import blackCar from './../assets/images/products/black-car.jpg';
import silverCar from './../assets/images/products/silver-car.jpg';
import iconBlack from './../assets/images/icons/icon-black.jpg';
import iconRed from './../assets/images/icons/icon-red.jpg';
import iconSilver from './../assets/images/icons/icon-silver.jpg';
import iconSteel from './../assets/images/icons/icon-steel.jpg';

class CarExercise extends Component {

    state = {
        carImage: redCar,
    }

    // changeCar = (change) => () => {
    // };
    // changeCar = (change) => () => {
    //     this.setState({
    //         carImage: change,
    //     })
    // }
    changeCar = (change) => {
        return () => {
            this.setState({
                carImage: change,
            })
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.carImage} alt="car" className="w-100"/>
                    </div>
                    <div className="col-6">
                        <img className="w-25 mb-3" onClick={this.changeCar(blackCar)} src={iconBlack} alt="color button"/>
                        <img className="w-25 mb-3" onClick={this.changeCar(redCar)} src={iconRed} alt="color button"/>
                        <img className="w-25 mb-3" onClick={this.changeCar(silverCar)} src={iconSilver} alt="color button"/>
                        <img className="w-25 mb-3" onClick={this.changeCar(steelCar)} src={iconSteel} alt="color button"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarExercise;