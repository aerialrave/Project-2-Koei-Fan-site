import React from 'react';
// import game, character, welcome, and video

import Video from '../video';
import Welcome from '../welcome';
import Game from '../game';
import Character from '../character';



export default function Content(props){



return(
<div className="cont">
{props.window()}

</div>
  )
}
