import React from 'react';

export default function Video(props){
return(
<div id="vid">

<div class="videoWrapper">
  
    <iframe width="560" height="349" src={props.fetchbox.ytlink} frameborder="0" allowfullscreen>

    </iframe>


</div>


</div>
  )
}
