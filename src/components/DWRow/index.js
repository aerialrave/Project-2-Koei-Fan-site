import React from 'react';
import Zhao from './zhouyun.png';
import Guan from './guanyu.png';
import Cao from './Cao_Cao_(DW9).png';
import Xia from './Xiahou.png';
import Lu from './Lu_Bu_(DW9).png'

export default function DWRow(props){
return(
<div id="charslide">

<div className="charblock" onClick={() =>props.mixclutch('character','Zhou')}  >
<img src={Zhou} />
<h3>Zhou Yun</h3>
 </div>

<div className="charblock"  onClick={() =>props.mixclutch('character','Guan')}>
<img src={Guan} />
 <h3>Guan Yu</h3>
</div>

<div className="charblock"  onClick={() =>props.mixclutch('character','Cao')}>
<img src={Cao} />
<h3>Cao Cao</h3>
 </div>

<div className="charblock"  onClick={() =>props.mixclutch('character','Xiahou')}>
<img src={Xia} />
<h3>Xiahou Dun</h3>
</div>


<div className="charblock"  onClick={() =>props.mixclutch('character','Lu')}>
<img src={Lu} />
<h3>Lu Bu</h3>


</div>
  )
}
