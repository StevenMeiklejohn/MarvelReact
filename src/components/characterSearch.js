import React from 'react';

class CharacterSearch extends React.Component{

  constructor(props){
  super(props);
  }


  render(){
    return(
      <div className="characterSearch">
        <p>Search For A Character</p>
        <form>
          <input type="text" name="character"></input>
        </form>
      </div>
    )
  }
}

export default CharacterSearch
