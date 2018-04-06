import React, { Component } from 'react';
import './students.css';

class Students extends Component {
  state = {students: []}

  componentDidMount() {
    fetch('/api/students',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(res => res.json())
      .then(students => this.setState({ students }));
  }

  render() {
    const defaultStyle = {
      color: "white",
      borderColor: "#E0CE00",
      borderSize: 1,
      borderStyle: "solid"
    }
    const style = {
      ...defaultStyle,
      margin: 20,
      padding: 20,
      backgroundImage: this.props.image,
      color : this.props.fontColor,
      fontFamily: 'georgia, cursive',
      fontStyle: 'italic',
    }
    const style2 = {
      ...defaultStyle,
      margin: 20,
      padding: 20,
      backgroundColor: this.props.color2,
      color : this.props.fontColor2,
    }
    return (
      <div style = {style} className="students">
        <h1>Students</h1>
        {this.state.students.map(student =>
          <div style = {style2} key={student.name}>{student.name} {student.gender} {student.punctuality}</div>
        )}
      </div>
    );
  }
}

export default Students;
