import React from 'react';
import '../../assets/App.css';

function Square(props) {
  const {
    project, selectItem,
  } = props;
  const projectName = `${project.name.substring(0, 1)}A`;
  return (
    <div
      className="projects-block__square"
      style={{ border: project.selected ? `solid 2px ${project.color}` : '' }}
      onClick={() => selectItem(project.id)}
      role="button"
      tabIndex="0"
      onKeyDown={() => selectItem(project.id)}
    >
      <div className="projects-block__innerSquare" style={{ backgroundColor: project.color }}>
        <span className="projects-block__project-title">{projectName}</span>
      </div>

    </div>
  );
}

export default Square;
