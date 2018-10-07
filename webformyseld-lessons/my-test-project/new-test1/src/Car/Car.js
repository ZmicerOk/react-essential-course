import React from 'react';

export default props => (
    <section style={{
        border: '1px solid #666666',
        marginBottom: '10px'
    }}>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type='text' onChange={props.onChangeTitle}/>
        {/* <button onClick = {props.onChangeTitle}>Click</button> */}
        {/* This is <strong>Car</strong> Component! */}
    </section>
    )