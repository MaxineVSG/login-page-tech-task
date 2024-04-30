import { Component } from 'react';

class Form extends Component {
  render() {
    let submit = this.props.submit

    return (
      <form className='wrapper--small' onSubmit={submit}>
        { this.props.children }
      </form>
    )
  }
}

export default Form;