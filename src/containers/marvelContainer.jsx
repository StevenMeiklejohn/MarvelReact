import React from 'react'
import MD5 from 'crypto-js/md5'
import CharacterSelector from './../components/characterSelector'
import CreatorSearch from './../components/creatorSearch'
import CharacterSearch from './../components/characterSearch'
import TitleSearch from './../components/titleSearch'
import RandomComic from './detailsContainer'

const api = require('marvel-api');

class MarvelContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comic: null,
      frontCover: null,
      title: null,
      creator: null,
      characters:[],
      character: null,
      fetching_characters: false
    }
    this.getRandomInt = this.getRandomInt.bind(this);
    this.md5 = this.md5.bind(this);
    // this.getRandomComic = this.getRandomComic.bind(this);
    this.search_for_character = this.search_for_character.bind(this);
    this.search_for_creator_by_surname = this.search_for_creator_by_surname.bind(this);
    this.search_for_creator_by_id = this.search_for_creator_by_id.bind(this);
    this.get_characters = this.get_characters.bind(this);
    this.get_all_characters = this.get_all_characters.bind(this);


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
    // this.get_all_characters();
  }


  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  md5(value) {
    // return CryptoJS.MD5(value).toString();
    return MD5(value).toString();
  };


  async get_all_characters() {
    const promises = [];
    for(var i = 0; i < 1500; i+=100){
      const getCharacterPromise = this.get_characters(100, i)
      promises.push(getCharacterPromise)
    }
    await Promise.all(promises)
  }

  get_characters(num_to_get, index_offset){
    let chars = this.state.characters;
    this.marvel.characters.findAll(num_to_get, index_offset)
    .then(function(res){
      chars.push(res.data);
      this.setState({characters: chars});
      console.log(this.state.characters);
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
        <h4>Welcome to the Marvel Unlimited Reading List</h4>
        <div>
          <CharacterSelector characters={this.state.characters}/>
        </div>
        <div>
          <CharacterSearch/>
        </div>
        <div>
          <CreatorSearch/>
        </div>
        <div>
          <TitleSearch/>
        </div>
        <div>
          <RandomComic/>
        </div>
      </React.Fragment>
    )
  }
}

export default MarvelContainer;
