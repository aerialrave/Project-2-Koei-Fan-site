import React, { Component, Fragment } from 'react';
import Video from './components/video';
import Welcome from './components/welcome';
import Sidebar from './components/sidebar';
import Game from './components/game';
import Banner from './components/banner';
import Content from './components/content';

import './App.css';
import axios from 'axios';

//const BASE_URL = "http://www.koei.wikia.com/api.php?";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      rendarr: [],
      currentview:'',
      fetchstring: '',
    }
this.handleView = this.handleView.bind(this);
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleChange.bind(this);
this.handleFetch = this.handleFetch.bind(this);
  }
// handles change of view
handleView(view){
this.setState({
  currentview: view
})


}

handleChange(e){

}

async handleSubmit(e){

}
// handles changes of content
async handleFetch(grab){
this.setState({
    fetchstring: grab
      })
}


viewControl(){
const view = this.state.currentview;
switch(view) {

    case 'character': return <Character fetchclutch={this.handleFetch} viewclutch={this.handleView} fetchcontent={this.state.fetchstring}  />
    // use this for multi returns case 'hi': return (<div><Character /><Game /></div>)
      // use this to change content on fetch change view from game to character
    case 'game':return <Game  fetchclutch={this.handleFetch} viewclutch={this.handleView} fetchcontent={this.state.fetchstring}  />

    default: return <Welcome />

    }

}


// get a list of all games and characters and then  make the appropriate axios request
fetchControl(){
const fetch = this.state.fetchstring;
switch(grab){
  case 'DW': return

  case 'SAMW': return

  case 'WINP': return
  // this is for the otomo game
  case 'Gold': return

  case 'Zhou': return

  case 'Guan': return

  case 'Cao': return

  case 'Xiahou': return

  case 'Lu': return

  case 'Yuki': return

  case 'Nobu': return

  case 'Masa': return

  case 'Hanz': return

  case 'Taka': return

  default : return
}


}




  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
