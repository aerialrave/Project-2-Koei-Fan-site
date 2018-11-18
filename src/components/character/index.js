import React from 'react';
import ZhouYun from './zhouyun.jpg';
import GuanYu from './guanyu.jpg';
import CaoCao from './Cao_Cao_(DW9).png';
import LuBu from './Lu_Bu_(DW9).png';
import Xiahou from './Xiahou.jpg';
import YukiKim from './yukim.jpg';
import Hanzo from './Hanzo-sw4.jpg';
import Taka from './Tadakatsu-sw4.jpg';
import Masamune from './Masamune-sw4.jpg';
import Nobunaga from './Nobunaga-sw4.jpg';

import DWRow from './components/DWRow';
import SWRow from './components/SWRow';

function charswitch(st){
  switch (st){
      case 'Zhou': return(  <img src={ZhouYun} />  )
      break;
      case 'Guan': return( <img src={GuanYu} /> )
      break;
      case 'Cao': return( <img src={CaoCao}   /> )
      break;
      case 'Xiahou':return ( <img src={Xiahou} />)
      break;
      case 'Lu': return(  <img src={LuBu} />  )
        break;

      case 'Yuki': return( <img src={YukiKim} /> )
        break;
      case 'Nobu': return( <img src={Nobunaga} /> )
        break;
      case 'Masa':return ( <img src={Masamune} />)
        break;
      case 'Hanz': return(  <img src={Hanzo} />  )
          break;
        case 'Taka': return( <img src={Taka} /> )
          break;

      default: return;

    };
};


function barswitch(st){
  switch (st){
      case 'Zhou': return(  <DWRow />  )
      break;
      case 'Guan': return( <DWRow /> )
      break;
      case 'Cao': return( <DWRow /> )
      break;
      case 'Xiahou':return ( <DWRow />)
      break;
      case 'Lu': return(  <DWRow />  )
        break;

      case 'Yuki': return( <SWRow /> )
        break;
      case 'Nobu': return( <SWRow /> )
        break;
      case 'Masa':return ( <SWRow />)
        break;
      case 'Hanz': return(  <SWRow />  )
          break;
        case 'Taka': return( <SWRow /> )
          break;

      default: return;

    };
};



export default function Character(props){
return(
<div className="char">

<div className="chartop">
<div className="char-img-div">
{charswitch(props.fetchcontent)}
</div>


<div className="char-content">
<h2>{props.fetchbox.name} </h2>
  <p>{props.fetchbox.date} </p>
 <p>{props.fetchbox.summary}</p>
 {barswitch(props.fetchcontent)}
</div>

</div>

</div>
  )
}
