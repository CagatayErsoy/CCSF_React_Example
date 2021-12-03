import React from "react";

class ClassItem extends React.Component {
    render() {
        const completeStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.5,
            textDecoration: "line-through"
        }
        return <div className="d-flex justify-content-center class-item">
           
       
        <h4 style={this.props.c.completed ? completeStyle : null }>{this.props.c.title}</h4>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
        <button onClick={() => this.props.deleteClassProps(this.props.c.id)} className="btn btn-danger">DELETE</button>
        </div>
    }
}

export default ClassItem