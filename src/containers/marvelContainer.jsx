import React from 'react'
import MD5 from 'crypto-js/md5'
import Details from './../components/details'
import DetailsBox from './../components/detailsBox'
import FrontCover from './../components/frontCover'
import CharacterSelector from './../components/characterSelector'

const api = require('marvel-api');

class MarvelContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comic: null,
      frontCover: null,
      title: null,
      creators: [],
      characters:[]
    }
    this.getRandomInt = this.getRandomInt.bind(this);
    this.md5 = this.md5.bind(this);
    // this.getRandomComic = this.getRandomComic.bind(this);
    this.search_for_character = this.search_for_character.bind(this);
    this.search_for_creator_by_surname = this.search_for_creator_by_surname.bind(this);
    this.search_for_creator_by_id = this.search_for_creator_by_id.bind(this);
    this.get_characters = this.get_characters.bind(this);
    this.get_500_characters = this.get_500_characters.bind(this);


    this.marvel = api.createClient({
      publicKey: "1a11ffc2c79394bdd4e7a7b8d97c43a9",
      privateKey: "403c5f3406be455684061d92266dea467b382bdc"
    });
  }

  componentDidMount(){
    // this.getRandomComic();
    // this.search_for_character('spider-man');
    // this.fetch_first_ten_characters();
    // this.fetch_ten_characters_starting_at_index_30();
    // this.fetch_all_characters();
    // this.search_for_creator_by_surname('Starlin');
    // this.search_for_creator_by_id(146);
    // this.get_characters(100, 100);
    this.get_500_characters();
  }


  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  md5(value) {
    // return CryptoJS.MD5(value).toString();
    return MD5(value).toString();
  };

  // getRandomComic(){
  //   // keys for API
  //   var PRIV_KEY = "403c5f3406be455684061d92266dea467b382bdc";
  //   var API_KEY = "1a11ffc2c79394bdd4e7a7b8d97c43a9";
  //   // create new date object
  //   var ts = new Date().getTime();
  //   // generate random in between 1 and 50000
  //   var randomNumber = this.getRandomInt(1, 50000);
  //   // target api
  //   var url = "http://gateway.marvel.com:80/v1/public/comics/" + randomNumber + "?apikey=1a11ffc2c79394bdd4e7a7b8d97c43a9";
  //   // create a hash using md5 function
  //   var hash = this.md5(ts + PRIV_KEY + API_KEY);
  //   // modify url with hash
  //   url += "&ts="+ts+"&hash="+hash;
  //   // make request
  //   // ============
  //   var request = new XMLHttpRequest();
  //   request.open("GET", url);
  //   request.onload = () =>  {
  //     if (request.status === 200) {
  //       var jsonString = request.responseText;
  //       var marvel = JSON.parse(jsonString);
  //       this.setState({comic: marvel.data});
  //       this.setState({frontCover: marvel.data.results[0].thumbnail.path});
  //       this.setState({title: marvel.data.results[0].title})
  //
  //       var creatorArray = marvel.data.results[0].creators.items;
  //       var newArray = this.state.creators.concat(creatorArray);
  //       this.setState({creators: newArray});
  //
  //
  //     }
  //   }
  //   request.send();
  // };

  get_500_characters(){
    let offset = 0;
    let chars = [];
    while(offset < 500){
      chars.push(this.get_characters(100, offset));
      offset += 100;
    };
    console.log(chars);
    this.setState({characters: chars})
    console.log(this.state.characters);
  }



  get_characters(num_to_get, index_offset){
    this.marvel.characters.findAll(num_to_get, index_offset)
    .then(function(res){
      console.log("Get characters response (100, offset 100)", res.data);
    }.bind(this))
    .fail(console.error)
    .done();
  }


  search_for_character(character){
    this.marvel.characters.findByName(character)
    .then(function(res) {
      console.log("Search for character results", res.data[0]);
      return this.marvel.characters.comics(res.data[0].id);
    }.bind(this))
    .fail(console.error)
    .done();
  }

  search_for_creator_by_surname(surname){
    this.marvel.creators.findByName(surname)
    .then(function(res){
      console.log("Search for creator by surname results", res.data);
    }.bind(this))
    .fail(console.error)
    .done();
  }

  search_for_creator_by_id(id){
    this.marvel.creators.find(id)
    .then(function(res){
      console.log("Search for creator by id(Starlin - 146)", res.data);
      console.log("Search for creator by id(available comics)", res.data[0].comics.available);
    }.bind(this))
    .fail(console.error)
    .done();
  }




  render(){
    return(
      <React.Fragment>
      <h4>Welcome to the Random Marvel Comic Generator</h4>
      <CharacterSelector characters={this.state.characters}/>
      </React.Fragment>
    )
  }
}

export default MarvelContainer;
