import React, { Component } from 'react';
import '../styles/experience.css';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      position: '',
      mainTasks: '',
      from: '',
      to: '',
      isEditing: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEdit() {
    this.setState({
      isEditing: true,
    });
  }
  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { companyName, position, mainTasks, from, to } = this.state;
    this.props.handleSubmit({ companyName, position, mainTasks, from, to });
    this.setState({ isEditing: false });
  }
  handleCancel() {
    this.setState({
      companyName: '',
      position: '',
      mainTasks: '',
      from: '',
      to: '',
      isEditing: false,
    });
  }

  render() {
    const { companyName, position, mainTasks, from, to, isEditing } =
      this.state;
    const { experience } = this.props;
    if (isEditing) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Company Name:
              <input
                type="text"
                name="companyName"
                value={companyName}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Position:
              <input
                type="text"
                name="position"
                value={position}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Main Tasks:
              <br />
              <textarea
                name="mainTasks"
                value={mainTasks}
                onChange={this.handleInputChange}
              ></textarea>
            </label>
            <br />
            <label>
              From:
              <input
                type="date"
                name="from"
                value={from}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              To:
              <input
                type="date"
                name="to"
                value={to}
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
          <h2>Experience</h2>
          <hr className="line" />
          <ul>
            {experience.map((exp, index) => (
              <li key={index}>
                <strong>company Name:</strong> {exp.companyName}
                <br />
                <strong>position: </strong>
                {exp.position}
                <br />
                <strong>Main tasks:</strong>
                {exp.mainTasks}
                <br />
                <strong>From:</strong>
                {exp.from}
                <br />
                <strong>To:</strong>
                {exp.to}
              </li>
            ))}
          </ul>
          <button type="button" onClick={this.handleEdit}>
            Add Experience
          </button>
        </div>
      );
    }
  }
}

export default Experience;
