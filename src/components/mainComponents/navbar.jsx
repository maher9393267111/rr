import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from "@mui/icons-material/Close";
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { useState } from "react";
import Listitem from '../sub-components/listitem'
export default function Navbar() {
  const [isactive, setisactive] = useState(false);
const [tabbooks,settabbooks] = useState(false)


const tabBooks=()=> {
settabbooks(!tabbooks)
}


const closetab =()=> {
  settabbooks(false)



}




  return(


  <div>

<div className='nav-container' style={{display:'flex',width:'100%'}}>

<div className='nav-logo' style={{width:'180px'}}>

  <h4>Emirates</h4>
</div>

<nav className='navba' style={{display:'flex',justifyContent:'space-between',width:'80%'}}>

{/* nav items  left side*/}

<ul className='nav-items' style={{display:'flex'}}>

{/* tab-books */}


<li > <span className={!tabbooks ? 'hoverme' : ''} onClick={tabBooks}>Books</span>
  <div className='book-tab-container'>
  { tabbooks &&  <Listitem tabbooks={tabbooks} closetab={closetab}  className='book-tab'/>}
  </div>


</li>
<li>mangodb</li>
<li>experience</li>
<li>where you fly</li>
<li>loyality</li>
<li>help material</li>

</ul>

{/* right bar side */}

<div className='right-nav'>
<h5><LanguageIcon className='world-icon'/> TR</h5>
<p><ZoomOutIcon className='sear-chicon'/></p>
<h5>login in</h5>

</div>






</nav>


</div>

















  </div>
    )
}
