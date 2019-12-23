import React from 'react';
import Square from '../../component/mainPage/Square';
import '../../assets/App.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      projects: props.projects,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.searchProjectByName(e.target.value);
  }


  searchProjectByName = (name) => {
    const { projects } = this.props;
    if (name) {
      this.setState((prevState) => {
        const nProjects = prevState.projects.filter((p) => p.name.startsWith(name));
        return {
          projects: nProjects,
        };
      });
    } else {
      this.setState(() => ({
        projects,
      }));
    }
  }

  renderProjects = (projects) => {
    const { selectItem } = this.props;
    if (projects.length > 0) {
      return projects.map((p) => <Square project={p} key={p.id} selectItem={selectItem} />);
    }
  }

  render() {
    const { projectName, projects } = this.state;
    const { isItemSelected } = this.props;
    const projectsList = this.renderProjects(projects);
    return (
      <div className={!isItemSelected ? 'active-window' : 'active-window_project-selected'}>
        <div className="header-wrapper">
          <div className="header">
            <div className="header__greeting">
              <h2>Hi Azat</h2>
              <p>Welcome back to the workspace, we missed you!</p>
            </div>
            <input
              type="text"
              className="header__input"
              name="projectName"
              value={projectName}
              placeholder="Search Task or Project..."
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className={!isItemSelected ? 'projects-wrapper' : 'projects-wrapper_project-selected'}>
          <div className="projects">
            <div className="projects-header">
              <p>{`Projects(${projects.length})`}</p>
            </div>
            <div className={!isItemSelected ? 'projects-block' : 'projects-block_project-selected'}>
              {projectsList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
