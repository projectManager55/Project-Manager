import React from 'react';
import '../../assets/App.css';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      projectName: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { searchProjectByName } = this.props;
    this.setState({
      [e.target.name]: e.target.value,
    });
    searchProjectByName(e.target.value);
  }

  render() {
    const { projectName } = this.state;
    return (
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
    );
  }
}

export default Header;
