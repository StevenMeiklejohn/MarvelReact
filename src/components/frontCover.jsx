
import React from 'react'

class FrontCover extends React.Component{

  render(){
    return(
      <React.Fragment>
        <div className="randomSuggestion">
      <p>Random Suggestion:</p>
    </div>
      <div className="image">
        <img src={this.props.cover + ".jpg"} alt="https://get.whotrades.com/u3/photo843E/20389222600-0/big.jpeg"/>
      </div>
    </React.Fragment>
    )
  }
}

export default FrontCover
