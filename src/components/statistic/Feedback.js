import React, { Component } from 'react'

class Feedback extends Component {
  
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      };


 countFeedback = e => {
   const targetAttribute = e.target.name;
   this.setState(prevState => ({[targetAttribute]: prevState[targetAttribute] + 1}))
      
}

countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
}

countPositiveFeedbackPercentage = () => {
    return this.state.good * 100 / this.countTotalFeedback(); 
}


    render() {
      return (
      <>
      <h2>Please leave feedback</h2>
      <button type="button" name="good" onClick ={this.countFeedback}>Good</button>

      <button type="button" name="neutral" onClick ={this.countFeedback}>Neutral</button>
      <button type="button" name="bad" onClick ={this.countFeedback} >Bad</button>
      <h2>Statistics</h2>
    <p>Good: {this.state.good}</p>
    <p>Neutral: {this.state.neutral}</p>
    <p>Bad: {this.state.bad}</p>
    <p> Positive feedback: {Math.round(this.countTotalFeedback() !== 0 ? this.countPositiveFeedbackPercentage() : 0)}%</p>

      </>
      )
    }
  }
  export default Feedback;