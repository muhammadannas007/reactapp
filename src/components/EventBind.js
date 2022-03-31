import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'GoodBye!'
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }

    render() {
        return (
            <div>
                <h1>Event Bind - {this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                {/* <button onClick={() => this.clickHandler()}>click</button> */}
                {/* <button onClick={this.clickHandler}>click</button> */}
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default EventBind