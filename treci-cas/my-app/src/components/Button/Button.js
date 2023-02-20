import React, { Component } from "react"

class ButtonComponent extends Component {


    render() {
        return <button style={{ color: this.props.color }} onClick={()=>{this.props.clickHandler(this.props.color)}}>{this.props.color}button</button>
    }
}




export default ButtonComponent