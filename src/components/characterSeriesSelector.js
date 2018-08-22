import React from 'react';
const _ = require('lodash');


class CharacterSeriesSelector extends React.Component{

  constructor(props){
  super(props);
  this.flattenObject = this.flattenObject.bind(this);
  this.sorted_options = [];
  }

  flattenObject(object){
      // console.log("pre flattened", object);
      let flattened = _.flattenDeep(object);
      // console.log("flattened", flattened);
  }


  render(){
    if(this.props.character < 10){
      return(
        <div className="characterSelector">
          <p class="animated infinite lightSpeedIn delay-2s">Fetching Series..</p>
        </div>
      )
    }
    let series = this.props.series;
    console.log(series);
    console.log(typeof series);
    this.flattenObject(series);
    console.log(series);
    // console.log(series.length);
    let flatSeries = [];
    let orderedSeries = [];
    let ordered_options = [];
    // if(series.length === 15){
    //   series.forEach(function(element) {
    //     element.forEach(function(item){
    //         flatSeries.push(item)
    //     })
    //   });
    //   orderedSeries = _.sortBy(flatSeries, [function(o) { return o.name; }]);
    //
    //   orderedSeries.forEach(function(item){
    //     ordered_options.push(<option key={item.resourceURI} value={item.name}>{item.name}</option>)
    //   })
    //   this.sorted_options = ordered_options
    // }

    return(
      <div className="SeriesSelector">
        <p>Select a Series</p>
      <select onChange={this.props.onChange}>
      {this.sorted_options}
      </select>
      </div>
    )
  }
}

export default CharacterSeriesSelector
