import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "Всего" },
    { name: "active", label: "Осталось" },
    { name: "done", label: "Сделано" }
  ];

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const classNames =
        "btn " + (isActive ? "btn-info" : "btn-outline-secondary");
      return (
        <button
          type="button"
          className={classNames}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
