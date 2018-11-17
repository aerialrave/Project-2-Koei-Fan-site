import React, { Component, Fragment } from 'react';
import Video from './components/video';
import Welcome from './components/welcome';
import Sidebar from './components/sidebar';
import Game from './components/game';
import Banner from './components/banner';
import Content from './components/content';
import Character from './components/character'

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
      fetcharr:[]
    }
this.handleView = this.handleView.bind(this);
this.handleFetch = this.handleFetch.bind(this);
this.viewControl = this.viewControl.bind(this);
this.mixControl = this.mixControl.bind(this);

this.arrChange = this.arrChange.bind(this);
  }
// handles change of view
handleView(view){
  console.log(view);
this.setState({
  currentview: view
})


}








arrChange(arr){

  this.setState({
    fetcharr: arr
  })

}

// handles changes of content
async handleFetch(grab){
  console.log(grab);
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

switch(fetch){
  case 'DW': this.arrChange(['DWTitle']) 

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

mixControl(view,title){

  console.log(`${view} and ${title}` )
  this.handleView(view);
  console.log(`still running`)
  this.handleFetch(title);
  console.log(`ran`)
}




  render() {
    return (
      <div className="App">
        <div className="top">
          {/*banner needs onclick and viewclutch*/}
        <Banner viewclutch={this.handleView} />
        </div>

        <div className="bottom">
        {/*sidebar needs onclick and viewclutch*/}
        <Sidebar viewclutch={this.handleView} fetchclutch={this.handleFetch} fetchcontent={this.state.fetchstring} mixclutch={this.mixControl}  />
        {/*the rest of the props go here */}
        <Content viewclutch={this.handleView}  window={this.viewControl} fetchclutch={this.handleFetch} fetchcontent={this.state.fetchstring}  />
        </div>


      </div>
    );
  }
}

export default App;
