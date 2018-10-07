import React from 'react';

export default props => (
    <section>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <button onClick = {props.onChangeTitle}>Click</button>
        {/* This is <strong>Car</strong> Component! */}
    </section>
    )