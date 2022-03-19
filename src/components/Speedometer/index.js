// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onIncrementCount = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrementCount = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="main-heading"> SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />
        <h1 className="heading">Speed is {speed}mph </h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.onIncrementCount}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button2"
            onClick={this.onDecrementCount}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
