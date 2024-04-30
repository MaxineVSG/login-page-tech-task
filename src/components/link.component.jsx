import { Component } from 'react';

class Link extends Component {
  render() {
    let href = this.props.href
    let text = this.props.text

    return (
      <a href={href}>{text}</a>
    )
  }
}

export default Link;