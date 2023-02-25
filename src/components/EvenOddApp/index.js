// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  random = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  getThat = () => {
    const {count} = this.state
    const go = count % 2 === 0
    return go ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const givenNumber = this.getThat()
    return (
      <div className="outer">
        <div className="inner">
          <div>
            <h1 className="heading">Count {count}</h1>
            <p className="para">Count is {givenNumber} </p>
            <div>
              <button type="button" className="button" onClick={this.random}>
                Increment
              </button>
              <p className="para2">
                Increase By Random Number Between 0 to 100
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
