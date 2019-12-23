import React from 'react';
import Square from '../../component/mainPage/Square';

import '../../assets/App.css';

// eslint-disable-next-line react/prefer-stateless-function
class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects,
    };
  }

  renderProjects = (projects) => {
    if (projects.length > 0) {
      return projects.map((p) => <Square project={p} key={p.id} selectItem={this.selectItem} />);
    }
    // return this.state.projects.map((p) => <Square project={p} key={p.id} selectItem={this.selectItem} />);
  }

  selectItem = (id) => {
    this.setState((prevState) => {
      const nProjects = prevState.projects.map((p) => {
        p.selected = p.id === id;
        return p;
      });
      return {
        projects: nProjects,
      };
    });
  }

  render() {
    const { projects } = this.props;
    const projectsList = this.renderProjects(projects);
    return (
      <>
        <div className="projects">
          <div className="projects-header">
            <p>Projects(12)</p>
          </div>
          <div className="projects-block">
            {projectsList}
          </div>
        </div>
      </>
    );
  }
}

export default Project;
