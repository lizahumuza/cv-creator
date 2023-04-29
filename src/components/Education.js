import React, { Component } from 'react';
import '../styles/education.css';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: '',
      course: '',
      dateOfStudy: '',
      isEditing: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { schoolName, course, dateOfStudy } = this.state;
    this.props.handleSubmit({ schoolName, course, dateOfStudy });
    this.setState({ isEditing: false });
  };
  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleCancel = () => {
    this.setState({
      schoolName: '',
      course: '',
      dateOfStudy: '',
      isEditing: false,
    });
  };

  render() {
    const { schoolName, course, dateOfStudy, isEditing } = this.state;
    const { education } = this.props;

    if (isEditing) {
      return (
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label>
              School Name:
              <input
                type="text"
                name="schoolName"
                value={schoolName}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Title of study:
              <input
                type="text"
                name="course"
                value={course}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Date of study:
              <input
                type="date"
                name="dateOfStudy"
                value={dateOfStudy}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Save</button>
            <button type="button" onClick={this.handleCancel}>
              Delete
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="cont">
          <hr className="line" />
          <h2>Education</h2>
          <hr className="line" />
          <ul className="educ-items">
            {education.map((edu, index) => (
              <li key={index}>
                <strong>School Name:</strong>
                {edu.schoolName}
                <br />
                <strong>Title of study:</strong>
                {edu.course}
                <br />
                <strong>Date of Study:</strong>
                {edu.dateOfStudy}
              </li>
            ))}
          </ul>
          <button type="button" onClick={this.handleEdit}>
            Add Education
          </button>
        </div>
      );
    }
  }
}

export default Education;
