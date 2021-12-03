import React, { Component } from "react";

class InputClass extends Component {
    state = {
        title: "",
        unit:""
    };

    onChange = e => {
      this.setState({
          title: e.target.value
        
      });
  };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addClassProps(this.state.title);
       
        this.setState({
            title: "",
            unit:""
        });
    };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="f-container">
      <label for="nameAndUnit" class="form-label">Please enter Class name  and unit</label><br/>
        <input type="text" className="form-control" placeholder="Class Name and unit" value={this.state.title} onChange={this.onChange} required/>
       <br/>
      
        <input type="submit" value="Add Class" className="btn btn-primary" />
      </form>
    )
  }
}
export default InputClass