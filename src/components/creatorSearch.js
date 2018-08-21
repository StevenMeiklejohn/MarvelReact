import React from 'react';

class CreatorSearch extends React.Component{

  constructor(props){
  super(props);
  }


  render(){
    return(
      <div className="creatorSearch">
        <p>Search For Creator</p>
        <form>
          <input type="text" name="lastName"></input>
        </form>
      </div>
    )
  }
}

export default CreatorSearch
