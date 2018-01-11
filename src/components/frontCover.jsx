
import React from 'react'

class FrontCover extends React.Component{

  render(){
    return(
      <div className="image">
        <img src={this.props.cover + ".jpg"} alt="https://get.whotrades.com/u3/photo843E/20389222600-0/big.jpeg"/>
      </div>
    )
  }
}

export default FrontCover
