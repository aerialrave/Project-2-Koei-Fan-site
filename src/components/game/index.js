import React from 'react';
import DWTitle from './dyps4.jpg';
import SWTitle from './66094-samurai-warriors-4-na-ps4-box-art.png';
import WinPTitle from './Winning_post.jpg';
import GoldCTitle from './Corda4.jpg';

import DWRow from './components/DWRow';
import SWRow from './components/SWRow';

function gameswitch(st){

switch (st){
    case 'DW': return( <img src={DWTitle} />  )
      break;
    case 'SAMW': return( <img src={SWTitle} /> )
      break;
    case 'WINP': return( <img src={WinPTitle}   /> )
      break;
    case 'Gold':return ( <img src={GoldCTitle} />)
        break;
      default: return;

    };

};



function Barswitch(st){

switch (st){
  case 'DW': return(  <DWRow />  )
      break;
    case 'SAMW': return( <SWRow /> )
      break;
      default: return;

    };

};




export default function Game(props){


return(
<div className="gam">
  <div className="gametop">
<div className="game-img-div">


{gameswitch(props.fetchcontent)}

{console.log(props.fetchbox.imgsrc)}
</div>

<div className="game-content">

<h2>{props.fetchbox.title}</h2>
<p>{props.fetchbox.summary}</p>
{barswitch(props.fetchcontent)}
</div>

</div>


</div>
  )
}
