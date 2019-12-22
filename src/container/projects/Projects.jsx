import React, { Fragment } from 'react';
import '../../assets/App.css';

// eslint-disable-next-line react/prefer-stateless-function
class Project extends React.Component {
  render() {
    return (
      <>
        <div className="projects">
          <div className="projects-header">
            <p>Projects(12)</p>
          </div>
          <div className="projects-block">
            <div className="projects-block__square">
                ML
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Project;
