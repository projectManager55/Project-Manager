import React, { Fragment } from 'react';
import '../../assets/App.css';

function Square(props) {
  const { projectName, color } = props;
  const projectShortName = projectName.substring(0, 1);
  return (
    <div className="projects-block__square" style={{ backgroundColor: color }}>
      {projectShortName}
    </div>
  );
}

export default Square;
