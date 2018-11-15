import React, { Component, Fragment } from 'react';
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

    case 'character': return <Character />
    // use this for multi returns case 'hi': return (<div><Character /><Game /></div>)
    case 'game':return <Game />

    default: return <Welcome />

    }

}

fetchControl(){
const fetch = this.state.fetchstring;
switch(grab){
  case '': return
 // get a list of all games and characters and then  make the appropriate axios request
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
