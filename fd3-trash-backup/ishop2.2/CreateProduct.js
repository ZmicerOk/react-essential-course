import React from 'react';
import PropTypes from 'prop-types';

class TableCellComponent extends React.Component {
  render() {
    const { item, isActive, setActive, removeItem } = this.props;


    return <tr onClick={() => { setActive(item.id) }}
               className={isActive ? 'active' : ''}>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.itemUrl}</td>
      <td>{item.quantity}</td>
      <td>
        <button onClick={() => { removeItem(item.id) }}>
          Delete
        </button>
      </td>
    </tr>
  }
}

TableCellComponent.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    itemUrl: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};


export default TableCellComponent