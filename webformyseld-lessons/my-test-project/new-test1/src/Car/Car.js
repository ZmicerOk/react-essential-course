import React from 'react';

// function Car () {
//     return (
//         <h3>This is Car Component!</h3>
//     )
// }

// const Car = () => {
//     return (
//         <h3>This is Car Component!</h3>
//     )
// }

// const Car = () => <h3>This is Car Component!</h3>

// const Car = () => (
// <div>
//     This is <strong>Car</strong> Component!
// </div>
// )

//export default Car;

export default props => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
    {props.children}
        {/* This is <strong>Car</strong> Component! */}
    </div>
    )