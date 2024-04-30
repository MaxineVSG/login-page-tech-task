import { Component } from 'react';

class List extends Component {
  render() {
    let items = this.props.items

    return (
      <div className='list'>
        {items.map((item, index) => (
          <div key={`item-${index}`}>{item}</div>
        ))}
      </div>
    )
  }
}

export default List;