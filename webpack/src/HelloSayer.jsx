import React from "react";

export default class HelloSayer extends React.Component {
    render() {
        return (<p>Hello {this.props.name}!</p>);
    }
}