import React, { Component } from 'react';

// class Welcome extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Class Component</h1>
//                 { this.props.firstName } { this.props.lastName }
//             </div>
//         )
//     }
// }

//or

class Welcome extends Component {
    render() {
        const {firstName, lastName} = this.props
        // const {state1, state2} = this.state
        return (
            <div>
                <h1>Class Component</h1>
                <h1>Welcome {firstName} - {lastName}</h1>
            </div>
        )
    }
}

export default Welcome

//class component