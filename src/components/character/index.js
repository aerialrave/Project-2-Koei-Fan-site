import React from 'react';
import ZhouYun from './zhouyun.jpg';
import GuanYu from './guanyu.jpg';
import CaoCao from './Cao_Cao_(DW9).png';
import LuBU from './Lu_Bu_(DW9).png';
import Xiahou from './Xiahou.jpg';
import YukiKim from './yukim.jpg';
import Hanzo from './Hanzo-sw4.jpg';
import Taka from './Tadakatsu-sw4.jpg';
import Masamune from './Masamune-sw4.jpg';
import Nobunaga from './Nobunaga-sw4.jpg';

export default function Character(props){
return(
<div className="char">

<div className="chartop">
<div className="char-img-div">
{ /*img link goes here or on div itself */}
</div>


<div className="char-content"> <p>stock text here:</p>{ /*text content goes here or on div itself */} </div>
</div>

</div>
  )
}
