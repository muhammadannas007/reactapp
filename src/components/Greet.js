import React from "react";

// const Greet = (prop) => <h1>Hello {prop.firstName} {prop.lastName}</h1>
//or
// const Greet = ({firstName, lastName}) => {
//     return (
//         <div>
//             <h1>Hello {firstName} {lastName}</h1>
//         </div>
//     )
// }
//or
const Greet = props => {
    const {firstName, lastName} = props
    return (
        <div>
            <h1>Hello {firstName} - {lastName}</h1>
        </div>
    )
}

export default Greet


//functional component