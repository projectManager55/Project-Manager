import React from 'react';
import Header from '../../component/mainPage/Header';
import Projects from '../projects/Projects';
import '../../assets/App.css';

// eslint-disable-next-line react/prefer-stateless-function
class MainPage extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="header-wrapper">
          <Header />
        </div>
        <div className="projects-wrapper">
          <Projects />
        </div>
      </div>
    );
  }
}

export default MainPage;
