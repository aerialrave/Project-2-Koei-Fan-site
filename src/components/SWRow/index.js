import React from 'react';
import Yuki from './yukim.png';
import Oda from './Nobunaga-sw4.png';
import Masa from './Masamune-sw4.png';
import Hanz from './Hanzo-sw4.png';
import Taka from './Tadakatsu-sw4.png'

export default function SWRow(props){
return(
<div id="charslide">

<div className="charblock" onClick={() =>props.mixclutch('character','Yuki')}  >
<img src={Yuki} />
<h3>Yukimura Sanada</h3>
 </div>

<div className="charblock"  onClick={() =>props.mixclutch('character','Nobu')}>
  <img src={Oda} />
 <h3>Nobunaga Oda</h3>
</div>

<div className="charblock"  onClick={() =>props.mixclutch('character','Masa')}>
  <img src={Masa} />
<h3>Masamune Date</h3>
 </div>

<div className="charblock"  onClick={() =>props.mixclutch('character','Hanz')}>
  <img src={Hanz} />
<h3>Hanzo Hattori</h3>
</div>


<div className="charblock"  onClick={() =>props.mixclutch('character','Taka')}>
    <img src={Taka} />
<h3>Tadakatsu Honda</h3>
</div>

</div>
  )
}
