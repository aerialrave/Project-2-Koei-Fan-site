import React from 'react';

export default function Banner(props){
return(
<div id="bann">
<h1 onClick={() =>props.viewclutch('welcome')}>Welcome to the Koei Fansite!</h1>
</div>
  )
}
