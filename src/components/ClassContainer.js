import React from "react";
import ClassList from "./ClassList";
import Header from "./Header";
import InputClass from "./InputClass";
import { v4 as uuidv4 } from "uuid";

import './../index.css';

    

class ClassContainer extends React.Component {
    state = {
        classes: [
            {
                id: uuidv4(),
                title: "CNIT 103 - Hardware – 3 units ",
                
            },
            {
                id: uuidv4(),
                title: "CNIT 131 – Internet & Intro to HTML, CSS",
               
            },
            {
                id: uuidv4(),
                title: "CNIT 106 – Introduction to Networks",
                
            },
            {
                id: uuidv4(),
                title: "CNIT 120 – Network Security – 3 units",
                
            }

        ],
        isOn:true
    };
    
    handleChange = (id) => {
        this.setState({
            classes: this.state.classes.map(c => {
                if (c.id === id) {
                    c.completed = !c.completed;
                }
                return c;
            })
        });
    };

    deleteClass = id => {
        this.setState({
            classes: [
                ...this.state.classes.filter(c => {
                    return c.id !== id;
                })
            ]
        });
    };

    addClassItem = title => {
        const newClass = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            classes: [...this.state.classes, newClass]
        });
    };
   

  render() {
    return (
      <div className={`container ${this.state.isOn ? "light" : "dark"}`}>
             Chance the background to {this.state.isOn ? 'dark' : 'light'} theme
                <br />
                
            <button className="btn btn-info" button onClick={() => this.setState({isOn:!this.state.isOn})}>Chance it</button>
          <Header />
          <InputClass addClassProps={this.addClassItem} />
          <ClassList classes={this.state.classes} 
          handleChangeProps={this.handleChange}
          deleteClassProps={this.deleteClass} />
      </div>
    );
  }
}
export default ClassContainer