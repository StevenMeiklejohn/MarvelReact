import React from 'react'

class CharacterSelector extends React.Component{

  constructor(props){
  super(props);
}


  render(){
    if(!this.props.characters){
      return null;
    }
    let characters = this.props.characters;
    console.log(characters);
    let optionItems = characters.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ));
    return(
      <div className="characterSelector">
      <select>
      {optionItems}
      </select>
      </div>
    )
  }
}

export default CharacterSelector
