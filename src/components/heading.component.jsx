import { Component } from 'react';

class Heading extends Component {
  render() {
    let title = this.props.title;
    let subtitle = this.props.subtitle;

    return (
      <div className='heading'>
        <h1 className='heading__title'>{ title }</h1>
        <span>{ subtitle }</span>
      </div>
    )
  }
}

export default Heading;