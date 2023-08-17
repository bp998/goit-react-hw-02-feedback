import css from './Feedback.module.css';
import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  isVisible = () => {
    let check = this.state.good + this.state.bad + this.state.neutral;
    return check === 0 ? (check = true) : (check = false);
  };

  countTotalFeedback = () => {
    const value = this.state.good + this.state.neutral + this.state.bad;
    return value;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.bad + this.state.neutral;
    return total ? `${((this.state.good / total) * 100).toFixed(0)}%` : `0%`;
  };

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
        <p>Statistics</p>
        <div className={this.isVisible() ? '' : css.hidden}>
          No feedback Given
        </div>
        <div className={this.isVisible() ? css.hidden : ''}>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
