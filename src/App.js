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

    case 'character': return <Character fetchclutch={this.handleFetch} viewclutch={this.handleView} fetchcontent={this.state.fetchstring} fetchbox={this.state.fetchobj} mixclutch={this.mixControl} />
    // use this for multi returns case 'hi': return (<div><Character /><Game /></div>)
      // use this to change content on fetch change view from game to character
    case 'game':return <Game fetchclutch={this.handleFetch} viewclutch={this.handleView} fetchcontent={this.state.fetchstring} fetchbox={this.state.fetchobj} mixclutch={this.mixControl}  />

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

  case 'Zhou': this.handleobj({
    name: 'Zhou Yun',

lived: '168 - 229',

summary: `Zhao Yun (onyomi: Chō Un) is a general of the Three Kingdoms period who has a record of good service. Liu Bei personally praised his bravery at Han River, though it was often noted that his feats were often under the radar and often boasted by various fictional biographies. Romance of the Three Kingdoms and other local folklore commonly describes him as a just and virtuous general of peerless strength who has a deep sense of loyalty for Liu Bei. His lone rampage to protect A Dou remains one of his crowning feats in fiction. Years after his death he is lauded as one of the Five Tiger Generals.

His Dynasty Warriors incarnation is the mascot character of the series. He sometimes shares the spotlight with the series' other iconic character, Lu Bu. He consistently rides a white steed during in-game cutscenes. This persona also has two character image songs titled TRUE DRAGON and FIGHT IT OUT and a duet with Jiang Wei called MISSION.

Zhao Yun placed fourth place with fans in Gamecity's Dynasty Warriors 7 character popularity poll. For the Dynasty Warriors 8: Xtreme Legends character popularity poll, he placed first. In Famitsu's character survey, he is the most popular character within the boyfriend category. The latest poll for the eighth installment puts him in second. The character poll for overseas fans puts him in first place for the Shu division and third in the two final rounds. He is the most popular Dynasty Warriors character for the Warriors Orochi 3 Ultimate Halloween costume poll. Fans ranked him second in Shin Sangoku Musou Online Z's first survey for most popular general.

In Kessen II, his character's height is the same as his Dynasty Warriors counterpart.`,

ytlink: 'https://www.youtube.com/watch?v=zlv3BPzv6-I'

  })
  break;

  case 'Guan': this.handleobj({
    name: 'Guan Yu',

lived: '162 - 220',

summary: `Guan Yu (onyomi: Kan U) is arguably one of Liu Bei's bravest and strongest generals. Despite his spotty military record and arrogant behavior, his Romance of the Three Kingdoms portrayal is known for being a mighty warrior with a studious mind who could cleave apart an "army of thousands with ease." His well-kept beard was famous, and he was nicknamed "Beautiful Beard" (鬚髯) by his peers. Years after his death, he has been dubbed one of the Five Tiger Generals and worshiped as Guandi (関帝, lit. Emperor Guan) or Guangong (関公, lit. Duke Guan), the God of brotherhood, justice and righteousness; thus to this day it is common to see statues of him on altars at various Chinese shops. His historical children are Guan Ping and Guan Xing.

Romance of the Three Kingdoms and other Three Kingdoms fiction portrays him as the noble and dignified oath brother for Liu Bei and Zhang Fei, though it was noted that akin to his historical self, Guan Yu eventually let arrogance get the best of him which caused most soldiers from the Wu kingdom hold to grudge against him and thus bring about his downfall. His fictional children are Guan Suo and Guan Yinping.

Gamecity's Dynasty Warriors 7 character popularity poll has his Dynasty Warriors incarnation at thirty-fourth place out of sixty-two characters and fifty-sixth in the Dynasty Warriors 8: Xtreme Legends poll. The latest poll for the eighth installment puts him in fifty-first. The character poll for overseas fans puts him in third place for the Shu division and twelfth in the semi-final round.

His character's height in Kessen II is 185 cm (6'1").`,

ytlink: 'https://www.youtube.com/watch?v=MoUhA0GeVx4'

  })
            break;

  case 'Cao': this.handleobj({
    name: 'Cao Cao',

lived: '155 - march 15, 220',

summary: `Cao Cao (onyomi: Sō Sō) was the Chancellor of the Han Dynasty who laid the foundations for the future kingdom of Wei. A clean-cut, tall, and crafty individual, Cao Cao excelled in war and politics. He was loved and feared for his perceptiveness and swift retaliations, as well as his very close relationship with many of his retainers. Chen Shou commented that he was a leader who possessed a unique mindset and was a timeless hero.

Romance of the Three Kingdoms famously villainizes him to be a hot-blooded, sly, yet occasionally dumbfounded schemer who sometimes survived his hardships on luck alone, said to be from the heavens themselves being right beside him. His legitimate successor is Cao Pi, born from his consort Bianshi. Xiahou Dun, Xiahou Yuan, Cao Ren, and Cao Hong are his well-known cousins.

His Dynasty Warriors incarnation ranked in seventeenth place in Gamecity's Dynasty Warriors 7 character popularity poll and is twenty-sixth in the Dynasty Warriors 8: Xtreme Legends popularity poll. In Famitsu's character survey, he is the number one character fans would want as their boss. The latest poll for the eighth installment puts him in fifteenth. The character poll for overseas fans puts him in third place for the Wei division and fourteenth in the semi-final round.

His character's height in Kessen II is 180 cm (5'11").`,

ytlink: 'https://www.youtube.com/watch?v=ljW3n42oXKQ'

      })

        break;

  case 'Xiahou': this.handleobj({

    name: 'Xiahou Dun',

lived: '? - 13 June 220',

summary: `Xiahou Dun (onyomi: Kakō Ton) is one of Cao Cao's cousins from his father's side of the family. Though known as a short-tempered man in his youth, he became a lawful and cultured bureaucrat who focused on logistics and domestics. He served Cao Cao for his entire military career, dying mere months after his lord. He famously lost his left eye at Xiapi or Xiaopei from a stray arrow. Romance of the Three Kingdoms portrays him as a capable war general and has him famously devour his left eye after it's skewered by an arrow.

His Dynasty Warriors counterpart shares a brotherly relationship with one of Cao Cao's other cousins, Xiahou Yuan, in this series (though their actually blood relations historically are ambiguous). In Gamecity's character popularity poll for Dynasty Warriors 7, he was the second most popular character while the one for Dynasty Warriors 8: Xtreme Legends ranked him in ninth place. In Famitsu's character survey, he placed tenth in the boss category. The latest poll for the eighth installment puts him in seventh. The character poll for overseas fans puts him in first place for the Wei division and eighth in the semi-final round. He also ranked fifth in Shin Sangoku Musou Online Z's first survey for most popular general. He is the fifth most transcended character in the Dynasty Warriors: Unleashed character poll.

The height for his Kessen II incarnation is 185 cm (6'1").`,

ytlink: 'https://www.youtube.com/watch?v=RLTszrNqBFw'

      })

      break;

  case 'Lu': this.handleobj({name: 'Lu Bu',

  lived: '? - February 7 199',

  summary: `Lu Bu (onyomi: Ryo Fu) is a general of the late Han Dynasty who is infamous for his many betrayals in the central plains. Like many warlords of the era, he attempted to establish himself as an independent power before he met his end against Cao Cao's forces. Romance of the Three Kingdoms famously dubs him to be the mightiest warrior of his time, though both versions of him were equally known for his fickle personality and his lacking forte in tactics. His daughter is Lu Lingqi.

His trademarks in the Dynasty Warriors series are his high stats, his vastly superior moveset, his unique horse, and his theme song which doubles as the musical motif for several of the games' opening sequences. The exclamation "Do not pursue Lu Bu!" is fondly remembered by fans. He sometimes shares the spotlight with the series's other iconic character, Zhao Yun. Lu Bu reached twenty-first place with fans in Gamecity's Dynasty Warriors 7 and Dynasty Warriors 8: Xtreme Legends character popularity polls. The latest poll for the eighth installment puts him in thirty-third. The character poll for overseas fans puts him in first place for the Other division, second in the semi-finals, and first in the final round. He also ranked sixth in Shin Sangoku Musou Online Z's first survey for most popular general.

This counterpart also has a character image song titled KING OF DESTROYER and a duet with Diaochan called REASON TO FIGHT.`,

  ytlink: 'https://www.youtube.com/watch?v=Ej9MSVLPKPE'

  }); break;

  case 'Yuki':  this.handleobj({
    name: 'Yukimura Sanada',

lived: '1567 - June 3, 1615',

summary: `Yukimura Sanada (真田 幸村, Sanada Yukimura) is the romanticized name created for Nobushige. His historical counterpart is best known for his steadfast defense against the Tokugawa at Osaka. His accomplishments have been exaggerated after his death, and he is often heralded as the "greatest warrior of the land". Masayuki is his father, Yoshitsugu is his father-in-law, Ina is his sister-in-law, and his elder siblings are Lady Muramatsu and Nobuyuki.

Like his Dynasty Warriors counterpart Zhao Yun, Yukimura is the "poster boy" for the Samurai Warriors series, usually being placed on the cover/manuals of the games. This counterpart appears as a playable guest character in Shin Sangoku Musou VS.

Fans voted him to second place in Gamecity's Sengoku Musou 3: Empires and Sengoku Musou Shoot character popularity polls. In Koei-Tecmo's Facebook Sengoku Musou Chronicle 2nd poll, he was voted first place. According to the Sengoku Musou Seiyuu Ougi 2012 Aki questionnaire, he ranked third for the character fans would want as a lover and sixth for fans' ideal co-op partner for playing Samurai Warriors. For the Samurai Warriors 4 poll, he placed fourth.

His Nobunaga's Ambition counterpart is second place in Gamecity's character popularity ranking for 2015. He placed twenty-third in the Nobunaga no Yabou Taishi poll for most favorite father.`,

ytlink: 'https://www.youtube.com/watch?v=vg8Tn6nZ7Qo'

  }); break;

  case 'Nobu':  this.handleobj({
    name: 'Nobunaga Oda',

lived: 'June 23, 1534 - June 21, 1582',

summary: `Nobunaga Oda is one of the three unifiers of the Warring States period along with his former generals, Hideyoshi Toyotomi and Ieyasu Tokugawa. Until his untimely demise, Nobunaga is widely considered to have had controlled most of Japan as one of the strongest ruling powers of his time. He is Nō's husband, Oichi's older brother, and Nagamasa Azai's brother-in-law. His successor is his son, Nobutada, though he often does not live to continue his father's legacy.

In many of Kou Shibusawa's produced works, Nobunaga is often portrayed as a charismatic if flawed heroic figure rather than as a heartless dictator. He is the title character of the strategy series, Nobunaga's Ambition, and is the role model for Hideyoshi in Taiko Risshiden. He also appears as a bonus character in Dynasty Warriors using his visual look from the Nobunaga's Ambition series. To honor Nobunaga's Ambition leading to the company's recognition as a video game company, Nobunaga's sprite portrait is imprinted onto one of the cement courts in Koei-Tecmo's Kanagawa building. If he is a viable voting candidate, he will be the number one popular character for the Nobunaga's Ambition popularity polls. He placed fifth in the Nobunaga no Yabou Taishi poll for most favorite father; fans voted him first for the best leader poll.

His Samurai Warriors portrayal is deemed as the equivalent to the Dynasty Warriors portrayal of Cao Cao. Nobunaga is seventeenth place in Gamecity's Sengoku Musou 3: Empires character popularity poll. In Koei-Tecmo's Facebook Sengoku Musou Chronicle 2nd poll, he tied for sixth place with three other characters. For the Samurai Warriors 4 poll, he placed thirty-five in the list.`,

ytlink: 'https://www.youtube.com/watch?v=LN79Gmj5KI0'
  }); break;

  case 'Masa':  this.handleobj({
    name: 'Masamune Date',

lived: 'September 5, 1567 - June 27, 1636',

summary: `Masamune Date is the seventeenth head of the Date clan. In spite of facing an infamously traumatizing childhood, he rose to prominence as the most dominate ruling power in Ōshū. He is reputed as one of the wisest figures of the time era, biting back his ambitions to stay as one of the wealthiest independent rulers of his time. After his death, Masamune's famous nickname became the "One-Eyed Dragon" (独眼竜, Dokuganryū) also used for Li Keyong.

In Gamecity's Sengoku Musou 3: Empires and Sengoku Musou Chronicle 2nd character popularity polls, Masamune placed fifth with Samurai Warriors fans. According to the Sengoku Musou Seiyuu Ougi 2012 Aki questionnaire, he placed eighth for the character fans would want as a lover and second for fans' ideal co-op partner for playing Samurai Warriors. For the Samurai Warriors 4 poll, he placed thirteenth. The first character popularity poll for Sengoku Musou Shoot has him at tenth place.

His Nobunaga's Ambition counterpart is fourth place in Gamecity's character popularity ranking for 2015. He placed twentieth in the Nobunaga no Yabou Taishi poll for most favorite father.`,

ytlink:'https://www.youtube.com/watch?v=2yXcuNZgIO0'

  }); break;

  case 'Hanz':  this.handleobj({
    name: 'Hanzo Hattori',

lived: '1542 - December 23, 1596',

summary: `Hanzō Hattori (服部 半蔵, Hattori Hanzō) is known in modern times to be one of Ieyasu's famous retainers. In fictional mediums, he is commonly portrayed as the leader of the Iga ninja rather than the historically accurate general.

Gamecity's Sengoku Musou 3: Empires character popularity poll lists his Samurai Warriors counterpart as thirty-first place out of forty characters. For the Samurai Warriors 4 poll, he is forty-fourth place.

The Nobunaga no Yabou 201X poll for 4-star officers puts him in forty-fifth place.`,

ytlink:'https://www.youtube.com/watch?v=j9ZIryG0Qxg'
  }); break;

  case 'Taka':  this.handleobj({
    name: 'Tadakatsu Honda',

lived: 'March 17, 1548 - December 3, 1610',

summary: `Tadakatsu Honda is a one of Ieyasu Tokugawa's retainers who attended to his lord in several campaigns. He is Ina's father. After his death, Tadakatsu has been heralded as a mighty and intelligent warrior, said to have returned from all of his battles unscathed. People in the Edo period have lauded him with several honorary titles, one of which includes the Four Guardian Kings of Tokugawa.

Before his playable debut in the Samurai Warriors series, he served as the model character for generic generals in Samurai Warriors. He acts as the figurative Dynasty Warriors Lu Bu of the series. Fans voted him to twenty-ninth place in Gamecity's Sengoku Musou 3: Empires character popularity poll. For the Samurai Warriors 4 poll, he placed forty-ninth.

His Nobunaga's Ambition counterpart is sixteenth place in Gamecity's character popularity ranking for 2015. The Nobunaga no Yabou 201X poll for 4-star officers puts him in eighteenth place. He placed twenty-sixth in the Nobunaga no Yabou Taishi poll for most favorite father.

In Saihai no Yukue, his height is 201 cm and he is 45 years old. He reads and trains as a hobby and his favorite food is rice.`,

ytlink:'https://www.youtube.com/watch?v=M1huszJC-aM'
  }); break;

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
