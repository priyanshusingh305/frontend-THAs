import React from "react"

class Button extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    render() {
        return (
            
                
                <button onClick={this.handleClick}>{this.state.count}</button>
            
        )
    }
}

export default Button
