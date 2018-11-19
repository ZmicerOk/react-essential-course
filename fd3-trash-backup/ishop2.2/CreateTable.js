import React from 'react';
import PropTypes from 'prop-types';

import TableCellComponent from './CreateProduct'

class TableComponent extends React.Component {
  constructor(props) {
    super(props);

    const { items } = props;

    this.state = {
      items,
      activeItem: null,
    }
  }

  setActive = activeItem => this.setState({ activeItem });

  removeItem = itemId => {
    const { items } = this.state; // const items = this.state.items;
    const filteredItems = items.filter( item => item.id !== itemId);
    this.setState({ items: filteredItems });
  };

  renderItems = (items, activeItem) => items.map( item => {
    const isActive = item.id === activeItem;

    return <TableCellComponent
      key={item.id}
      item={item}
      isActive={isActive}
      setActive={this.setActive}
      removeItem={this.removeItem}
    />
  });


  render () {
    const { items, activeItem } = this.state;
    console.log(items);

    return <table className="Table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Url</th>
        <th>Quanty</th>
        <th>Control</th>
      </tr>
      </thead>
      <tbody>
      {
        this.renderItems(items, activeItem)
      }
      </tbody>
    </table>
  }
}

TableComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.string,
        itemUrl: PropTypes.string,
        quantity: PropTypes.string,
        id: PropTypes.string
    })
  )
};

export default TableComponent;