import React from 'react';
import Square from '../../component/mainPage/Square';
import returnFormatedDate from '../../utils/returnDay';
import '../../assets/App.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isItemSelected: false,
    };
  }

  render() {
    const { isItemSelected } = this.state;
    let { projectId, events, projectName } = this.props;
    events = events.filter((e) => e.id === projectId);
    let currentEvents = events.filter((e) => returnFormatedDate(e.date) === returnFormatedDate(new Date()));
    currentEvents = currentEvents.map((e) => <p>{e.description}</p>);
    let upcomingEvents = events.filter((e) => new Date() < new Date(e.date));
    upcomingEvents = upcomingEvents.map((e) => <p>{e.description}</p>);
    return (
      <div className={!isItemSelected ? 'active-window' : 'active-window_project-selected'}>
        <div className="project-details">
          <div className="project-details-wrapper">
            <div className="project-details-header">
              <div className="project-details-header__title">
                <h2>{projectName}</h2>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
              </div>
            </div>
            <h4>Today</h4>
            {currentEvents}
            <h4>Upcoming</h4>
            {upcomingEvents}
          </div>
          <div className="project-details__button-wrapper">
            <button type="button" onClick={() => console.info('open modal')} className="add-event-button">+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
