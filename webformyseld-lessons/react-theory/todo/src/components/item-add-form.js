import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    onLabelChange = () => {
        console.log("*");
    }
    render() {
        return (
            <form className="item-add-form d-flex">
            <input  type= "text" 
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder = "What needs to bee done"/>
                <button className="btn btn-outline-secondary"
                    onClick={() => this.props.onItemAdded("Hello!")}>
                    Add Item
                </button>
            </form>
        )
    }
}