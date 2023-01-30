// Write your code here
import {Component} from 'react'

import './index.css'

const imageList = [
  'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  'https://assets.ccbp.in/frontend/react-js/heads-img.png',
]
class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, resultImage: imageList[1]}

  onChangeToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({resultImage: imageList[1]})
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
      }))
    } else {
      this.setState({resultImage: imageList[0]})
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {headsCount, resultImage, tailsCount} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>

          <img src={resultImage} className="icon" alt="toss result" />

          <button type="button" onClick={this.onChangeToss} className="btn">
            Toss Coin
          </button>
          <div className="counter">
            <p className="count">Total:{headsCount + tailsCount}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
