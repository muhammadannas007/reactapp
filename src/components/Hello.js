import React from 'react'

const Hello = () => {
    //jsx way
    // return (
    //     <div>
    //         <h1>Hello Hareesh</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Hareesh!')
    )
}

export default Hello