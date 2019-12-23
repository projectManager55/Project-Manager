import React from 'react';
import Square from '../../component/mainPage/Square';
import '../../assets/App.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      projects: props.projects,
      isItemSelected: false,
    };
  }

  render() {
    const { projects, isItemSelected } = this.state;
    return (
      <div className={!isItemSelected ? 'active-window' : 'active-window_project-selected'}>
        <div className="project-details">
          <div className="project-details-wrapper">

            <div className="project-details-header">
              <div className="project-details-header__title">
                <h2>Shopping Application</h2>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
              </div>
            </div>
            <h4>Today</h4>
            <p>all events</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
