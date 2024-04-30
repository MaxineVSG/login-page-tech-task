import { Component } from 'react';
import List from './list.component.jsx'

class Input extends Component {
  render() {
    let label = this.props.label
    let name = label.toLocaleLowerCase()
    let type = this.props.type
    let change = this.props.change
    let invalid = this.props.invalid
    let hasError = this.props.hasError
    let errorMsg = this.props.errorMsg

    return (
      <div className="input-field">
        <label>
          <div className="input-field__label">{ label }</div>
          <div className={"input-field__item " + (invalid ? 'input-field__item--invalid' : '')}>
            <input
              type={type}
              name={name}
              onChange={change}
            />
          </div>
          {hasError && (
            <List items={errorMsg}/>
          )}
        </label>
      </div>
    )
  }
}

export default Input;