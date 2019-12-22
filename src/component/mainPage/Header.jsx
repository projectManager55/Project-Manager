import React, { Fragment } from 'react';
import '../../assets/App.css';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__greeting">
          <h2>Hi Azat</h2>
        </div>
        <input type="text" name="projects" className="header__input" />
      </div>
    );
  }
}

export default Header;
