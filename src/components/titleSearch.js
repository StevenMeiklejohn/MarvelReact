import React from 'react';

class TitleSearch extends React.Component{

  constructor(props){
  super(props);
  }


  render(){
    return(
      <div className="titleSearch">
        <p>Search For A Comic Title</p>
        <form>
          <input type="text" name="title"></input>
        </form>
      </div>
    )
  }
}

export default TitleSearch
