
import React from 'react'

class FrontCover extends React.Component{

  render(){
    return(
      <div className="image">
        <img src={this.props.cover + ".jpg"}/>
      </div>
    )
  }
}

export default FrontCover
