import React from 'react';

export default props => (
    <section style={{
        border: '1px solid #666666',
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "35rem",
        margin: "10px auto"
    }}>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type='text' onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </section>
    )