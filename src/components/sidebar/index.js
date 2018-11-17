import React from 'react';

export default function Sidebar(props){
return(
<div id="sideb">

<div className="sideblock" onClick={() =>props.mixclutch('game','DW')}  >
<h3>Dynasty Warriors</h3>
 </div>

<div className="sideblock"  onClick={() =>props.mixclutch('game','SAMW')}>
 <h3>Samurai Warriors</h3>
</div>

<div className="sideblock"  onClick={() =>props.mixclutch('game','WINP')}>
<h3>Winning Post</h3>
 </div>

<div className="sideblock"  onClick={() =>props.mixclutch('game','Gold')}>
<h3>Golden Corda</h3>
</div>

</div>
  )
}
