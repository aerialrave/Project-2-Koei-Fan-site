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
      currentview:'',
      fetchstring: '',
      fetchobj:{}
    }
this.handleView = this.handleView.bind(this);
this.handleFetch = this.handleFetch.bind(this);
this.handleobj = this.handleobj.bind(this);

this.viewControl = this.viewControl.bind(this);
this.mixControl = this.mixControl.bind(this);
  }
// handles change of view
handleView(view){
this.setState({
  currentview: view
      })
}


handleobj(object){
  console.log(object);
      this.setState({
        fetchobj: object
      })
}




// handles changes of content // chooses which pool of data
 handleFetch(grab){
  console.log(grab);
this.setState({
    fetchstring: grab
      })
}


viewControl(){
const view = this.state.currentview;
switch(view) {

    case 'character': return <Character fetchclutch={this.handleFetch} viewclutch={this.handleView} fetchcontent={this.state.fetchstring} fetchbox={this.state.fetchobj} />
    // use this for multi returns case 'hi': return (<div><Character /><Game /></div>)
      // use this to change content on fetch change view from game to character
    case 'game':return <Game  fetchclutch={this.handleFetch} viewclutch={this.handleView} fetchcontent={this.state.fetchstring} fetchbox={this.state.fetchobj} />

    default: return <Welcome />

    }

}


// get a list of all games and characters and then  make the appropriate axios request
 fetchControl(fetch){


switch(fetch){
  case 'DW': this.handleobj( {title: 'Dynasty Warriors',
  summary: `Before the first game was conceived, Omega Force members were originally planning on making a brand new action game completely unrelated to history. However, since many of Koei's employees are fans of the Three Kingdoms era, the concept of a Three Kingdoms action game was unconsciously made by the team. There were talks over whether they should develop the game in-house or pitch to another developer, but Omega Force won out.

When the developers wanted to port the fighting game to the PlayStation 2, they had second thoughts due to the fighting game boom at the time. To make themselves stand out, they envisioned a battlefield scenario and focused on the prospect of the player working with a team to fight against several opponents at once. After they decided to incorporate more elements from the Three Kingdoms era, it eventually became the hack-and-slash hit that it's known for today.

To establish a distinct difference between the first game, the word "true" (真, shin) was inserted for the second title. Hence, the Japanese title for Dynasty Warriors 3 is actually Shin Sangoku Musou 2 and so on. Omega Force considers the Shin titles as the true start of the brand. Any series anniversary that they celebrate will be based on Dynasty Warriors 2's sales date.

Though listed under the action game genre, creators strove to make the series a "fusion of real time strategy and action". Eventually, the series's appeal was allowing the player to be a "one man army" versus the thousands of enemies in ancient China. Kou Shibusawa states that it was his personal desire to capture the excitement and thrill felt by the events in the novel. The series started its own type of genre. In the east, games similar to it are referred to as the Musou franchise. The English equivalent for the same term is Warriors series. Keeping in touch with the core ideas of its fighting game counterpart, the Dynasty Warriors series is designed to always be inviting to beginners to either the series or the action genre. The new features that are added into the series strive to never be too complicated, hoping to add another entertaining aspect for every type of fan of the Warriors games.

A recent Dengeki PlayStation interview reveals that the development team look at other Three Kingdoms period media frequently in between designing each entry. They also don't have a formal team of historical researchers like the ones seen in Koei's historical simulation titles. However, developers do rely on other novels, books and movies they have personally read or seen. A particular individual in the Omega Force team also knows the time era "like the back of their hand". Whenever they ask the person questions, he/she can correctly identify a particular place, person, or battle on the spot.

The mechanics set in this series help influence game play elements in Koei's other titles, some of which include the Samurai Warriors and Dynasty Warriors: Gundam series, Kessen III, and Bladestorm: The Hundred Years' War. Both the Dynasty Warriors and Samurai Warriors series crossover in the Warriors Orochi series.`,
  imgsrc: './components/game/dyps4.jpg',
  ytlink: 'https://www.youtube.com/watch?v=Xgo2s53VejM',
  entries: '9'} );

      break;

  case 'SAMW': this.handleobj({title: 'Samurai Warriors',
  summary: `Samurai Warriors (戦国無双, Sengoku Musou) is the second franchise of Warriors games created by Omega Force first published in 2004. It is set in the Japanese Warring States period. The first Warriors series, Dynasty Warriors, crosses over with this one in the Warriors Orochi universe.

After Hisashi Koinuma worked on Dynasty Warriors 3: Xtreme Legends, he sought to create a Warriors title that represented one of his original interests in Koei. He thought that if Dynasty Warriors is the action version of Romance of the Three Kingdoms, it would be natural to create a version based on the Nobunaga's Ambition franchise. When he pitched the title, Koinuma directed his concern to "refresh" the one versus a thousand theme.

Changing the setting alone created more leeway for focusing on the characters and their future, he argued. Compared to the Three Kingdoms' giant battlefields, the Warring States could become more concentrated on smaller incidents and sieges. He has also wanted to create a game where the player could witness each character's fates within a united story, one that doesn't completely follow history or common portrayals found within fiction. Doing so was his belief of making historical figures within this game unique and interesting. With these ideas in mind, Koinuma supported the creation of this series. He actively listens to the responses from fans in Japan and works to make their biggest requests possible.

His choices to move the series to Nintendo's systems are usually motivated by his desire to tinker with new hardware for the company and series. His desire to create Samurai Warriors Chronicles on the Nintendo 3DS began after he tried a test demo of the Animal Crossing title for the hand-held console. Although skeptic, he was blown away and sought to ignite the same experience with Samurai Warriors fans.`,
  imgsrc: './66094-samurai-warriors-4-na-ps4-box-art.png',
  ytlink: 'https://www.youtube.com/watch?v=gaXXN6U04fc',
  entries: '4'});

    break;

  case 'WINP':  this.handleobj({title:  'Winning Post',
  summary: `Winning Post (ウイニングポスト), officially abbreviated as WiPo (ウイポ) or WP, is a horse-raising simulation series first released by Koei in 1993. It is Koei's longest running sports and executive simulation IP.

The series' general producer is Kou Shibusawa. According to his commentary in interviews, Shibusawa has always been in awe of horses sprinting in motion and wanted to create another IP focusing on the visual. While he enjoyed seeing them in action for historical simulations, Shibusawa wanted to "capture the thrill of pounding horse hooves" in contemporary times.

During his personal research, he became familiar with Japanese horse owners in his local area and visited popular horse racing tracks. His goal shifted into a wish to replicate the care and resources for rearing a race horse that could win a Group One (G1) race. These concepts were married into the first title and remain a core idea within the series.`,
  imgsrc: './Winning_post.jpg',
  ytlink: 'https://www.youtube.com/watch?v=qCaL7nRI0jY',
  entries: '8' })

  break;
  // this is for the otomo game
  case 'Gold':  this.handleobj({

    title: 'Golden Corda',
summary: `Kiniro no Corda (金色のコルダ, Kin'iro no Corda, literally: "Golden Corda"; Corda meaning "string" in Italian) is a romantic simulation video game series made by Ruby Party for the female audience. The official name of the series is transcribed in Italian as La corda d'oro. Often abbreviated as "Corda", Kiniro no Corda is the third Neoromance entry. The series's character designer and illustrator is Yuki Kure.

To contrast itself from the heavy fantasy settings found in the Angelique and Harukanaru Toki no Naka de series, Kiniro no Corda is set within a modern setting. Based on fans' responses from surveys, Ruby Party decided to make the series a school themed story. The magical story elements found in the previous series are gradually downplayed as well, instead focusing on simulating a regular school day. Players are only able to meet and greet characters during a specific time and day in the week.

Another trait unique to Kiniro no Corda is the method of story telling. Other Neoromance titles give players the choice of focusing on a particular character, offering a normal ending if conditions for a character's story path aren't met. However, Kiniro no Corda unites the protagonist's story goal and a character's scenario in a single game. The protagonist may continue their school routine and will automatically receive an ending with the character who likes her the most. To obtain a character's "true" ending, the player will need to coordinate their playthrough to a character's set of events. Events and romantic scenes can be missed entirely if the player is too careless with managing their schedule.

The main protagonists in this series are completely silent high school girls. Special illustrations within the games will avoid showing her face or are drawn in first-person perspective. Any conversation options that appear in the games will not have her speak words, instead offering third-person commands such as "Approve" or "Deny". Ruby Party developer, Ayako Tsukaguchi, explains that this approach lets players say their own personal responses to the situation rather than select a predetermined quote that doesn't necessarily agree with them. Characters will address her by her default name if players use it, even speaking it aloud during voiced events.`,
imgsrc:  './Corda4.jpg',
ytlink: 'https://www.youtube.com/watch?v=hjWSBCQZTS8',
entries: '4'

  })


  break;

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
  this.handleFetch(title);
  console.log(`title input is ${title} the title in state is ${this.state.fetchstring}`)
  this.fetchControl(title);
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
