import React, { Component } from 'react';
import Content from '../Content/content';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';
import './home.css'
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Content />
                    <Sidebar />
                </div>
                <input />
                <Footer />
            </div>
        );
    }
}

export default Home;