import React from 'react';
import '../styles/personalInfo.css';

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.personalInfo.name,
      email: props.personalInfo.email,
      phone: props.personalInfo.phone,
      isEditing: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleEditClick() {
    this.setState({ isEditing: true });
  }

  handleCancelClick() {
    this.setState({
      name: this.props.personalInfo.name,
      email: this.props.personalInfo.email,
      phone: this.props.personalInfo.phone,
      isEditing: false,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, phone } = this.state;
    this.props.handleSubmit({ name, email, phone });
    this.setState({ isEditing: false });
  }

  render() {
    const { name, email, phone, isEditing } = this.state;
    const { personalInfo } = this.props;

    if (isEditing) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Save</button>
          <button type="button" onClick={this.handleCancelClick}>
            Delete
          </button>
        </form>
      );
    } else {
      return (
        <div>
          <h2>Personal Information</h2>
          <p>
            <strong>Name:</strong> {personalInfo.name}
            <br />
            <strong>Email:</strong>
            {personalInfo.email}
            <br />
            <strong>Phone:</strong> {personalInfo.phone}
          </p>
          <button type="button" onClick={this.handleEditClick}>
            Edit
          </button>
        </div>
      );
    }
  }
}

export default PersonalInfo;

{
  /*import React, { Component } from 'react';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:props.personalInfo.name,
      email:props.personalInfo.email,
      phone:props.personalInfo.phone,
      isEditing:false
    }
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleEdit=this.handleEdit.bind(this)
    this.handleCancel=this.handleCancel.bind(this)
  }

  handleInputChange(event){
   const {name,value} = event.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit(event){
    event.preventDefault();
    const {name,email,phone} = this.state
    this.props.handleSubmit({name,email,phone});
    this.setState({isEditing:false})
  }
  handleCancel(){
    this.setState({
      name:this.props.personalInfo.name,
      email:this.props.personalInfo.email,
      phone:this.props.personalInfo.phone,
      isEditing:false
    })

  }
  handleEdit(){
    this.setState({isEditing:true})

  }
  
  render() {
    const {name,email,phone, isEditing} = this.state
    const {personalInfo}=this.props

    if(isEditing){
    return (
      <div>
        <form>
          <h2>Personal Information</h2>
          <input type='text' name='name' value={name} onChange={this.handleInputChange} placeholder='Name'/>
          <br />
          <input type='email' name='email' value={email} onChange={this.handleInputChange} placeholder='Email'/>
          <br />
          <input type='tel' name='phone' value={phone} onChange={this.handleInputChange} placeholder='Name'/>
          <br />
          <button type='submit'>Add</button>
          <button type='button' onClick={this.handleCancel}>delete</button>
        </form>
        
      </div>
    );
    }else{
      return(
        <div>
          <h2>Personal Information</h2>
          <p>
            <strong>Name:</strong>{personalInfo.name}
            <br />
            <strong>Email:</strong>{personalInfo.email}
            <br />
            <strong>Phone:</strong>{personalInfo.phone}
          </p>
          <button type='button' onClick={this.handleEdit}>Edit</button>

        </div>

      )
    }
  }
}

export default PersonalInfo;*/
}
