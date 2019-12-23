import React from 'react';
import '../../assets/App.css';
import { projects, events } from '../../dummyData/dummyData';
import Dashboard from '../dashboard/Dashboard';
import ProjectDetails from '../projectDetails/ProjectDetails';


// eslint-disable-next-line react/prefer-stateless-function
class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      localProjects: projects,
      isItemSelected: false,
      events,
      projectId: '',
    };
  }

  selectItem = (id) => {
    this.setState((prevState) => {
      const nProjects = prevState.localProjects.map((p) => {
        p.selected = p.id === id;
        return p;
      });
      const projectName = prevState.localProjects.find((p) => p.id === id).name;
      return {
        localProjects: nProjects,
        isItemSelected: true,
        events: prevState.events,
        projectId: id,
        projectName,
      };
    });
  }


  render() {
    const {
      localProjects, isItemSelected, events: nEvents, projectId, projectName,
    } = this.state;
    return (
      <div className="main">
        <Dashboard projects={localProjects} selectItem={this.selectItem} isItemSelected={isItemSelected} />
        {!isItemSelected ? null : <ProjectDetails events={nEvents} projectName={projectName} isItemSelected={isItemSelected} projectId={projectId} />}
      </div>
    );
  }
}

export default MainPage;
