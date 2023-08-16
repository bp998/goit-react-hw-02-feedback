import { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <button type="button" name="good" onClick={this.handleClick}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleClick}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleClick}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
