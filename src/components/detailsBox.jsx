import React from 'react';
import Details from './details';

class DetailsBox extends React.Component {


  render(){
    // console.log(this.props);
    var creatorNodes = this.props.creators.map(function(creator) {
    return(
      <Details name={creator.name} role={creator.role}>
      </Details>
      );
    });
    return(
      <div className="details">
        <h4>Creative Team</h4>
        {creatorNodes}
      </div>
    )
  }
}

export default DetailsBox;
