import React, { Component } from 'react';

import Validation from './Validation/Validation';
import Char from './Char/Char';
import randomcolor from 'randomcolor';

export default class extends Component {
  state = {
    inputText: ''
  };

  onChangeHandler = event => {
    this.setState({inputText: event.target.value});
  };

  onRemoveCharHandler = index => {
    this.setState(prevState => ({
      inputText: prevState.inputText.split('').filter((_, charIndex) => index !== charIndex).join('')
    }));
  };

  render() {
    return (
      <div className="App">
        <input value={this.state.inputText} onChange={this.onChangeHandler} />
        <p>{this.state.inputText.length}</p>
        <Validation length={this.state.inputText.length} />
        {this.state.inputText.split('').map((char, index) => (
          <Char
            key={index}
            index={index}
            char={char}
            click={this.onRemoveCharHandler}
            backgroundColor={randomcolor()}
            textColor={randomcolor()}
          />
        ))}
      </div>
    );
  }
}
