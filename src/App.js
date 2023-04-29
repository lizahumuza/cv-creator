import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        name: '',
        email: '',
        phone: '',
      },
      education: [],
      experience: [],
    };
    this.handlePersonalInfoSubmit = this.handlePersonalInfoSubmit.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
  }

  handlePersonalInfoSubmit(info) {
    this.setState({ personalInfo: info });
  }

  handleEducationSubmit(edu) {
    this.setState({ education: [...this.state.education, edu] });
  }

  handleExperienceSubmit(exp) {
    this.setState({ experience: [...this.state.experience, exp] });
  }

  render() {
    const { personalInfo, education, experience } = this.state;
    return (
      <div className="container">
        <h1>CV Creator</h1>
        <PersonalInfo
          personalInfo={personalInfo}
          handleSubmit={this.handlePersonalInfoSubmit}
        />
        <Education
          education={education}
          handleSubmit={this.handleEducationSubmit}
        />
        <Experience
          experience={experience}
          handleSubmit={this.handleExperienceSubmit}
        />
      </div>
    );
  }
}

export default App;
