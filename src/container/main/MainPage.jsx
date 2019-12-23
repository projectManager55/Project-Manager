import React from 'react';
import '../../assets/App.css';
import { projects } from '../../dummyData/dummyData';
import Dashboard from '../dashboard/Dashboard';
import ProjectDetails from '../projectDetails/ProjectDetails';


// eslint-disable-next-line react/prefer-stateless-function
class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      localProjects: projects,
      isItemSelected: false,
    };
  }

  selectItem = (id) => {
    this.setState((prevState) => {
      const nProjects = prevState.localProjects.map((p) => {
        p.selected = p.id === id;
        return p;
      });
      return {
        localProjects: nProjects,
        isItemSelected: true,
      };
    });
  }


  render() {
    const { localProjects, isItemSelected } = this.state;
    return (
      <div className="main">
        <Dashboard projects={localProjects} selectItem={this.selectItem} />
        {!isItemSelected ? null : <ProjectDetails projects={localProjects} selectItem={this.selectItem} isItemSelected={isItemSelected} />}
      </div>
    );
  }
}

export default MainPage;
