import React from "react";
import ClassItem from "./ClassItem";

class ClassList extends React.Component {
    render() {
        return (
            <div>
                {this.props.classes.map(c => (
                    <ClassItem key={c.id} c={c}
                    handleChangeProps={this.props.handleChangeProps}
                    deleteClassProps={this.props.deleteClassProps} />
                ))}
            </div>
        )
    }
}
export default ClassList