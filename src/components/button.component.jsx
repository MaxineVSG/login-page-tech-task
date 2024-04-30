import { Component } from 'react';

class Button extends Component {
  render() {
    let isDisabled = this.props.isDisabled
    let type = this.props.type
    let text = this.props.text
    let classes = this.props.classes + ' ' + `btn btn--${this.props.color} btn--${this.props.size}`

    return (
      <button className={classes} disabled={isDisabled} type={type}>
        {text}
      </button>
    )
  }
}

export default Button;