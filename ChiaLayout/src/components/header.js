import React from "react";
import './header.css'

//class component demo
export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Header</h1>
        <nav>
          <a>Home</a>
          <a>Products</a>
        </nav>
      </div>
    );
  }
}
