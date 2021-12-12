import Box from '@mui/material/Box';

import '../styled/tab1.css'
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import React, { Component } from 'react';
import Tab from '@mui/material/Tab';


// import { Container } from './styles';

function Listitem(props) {




const closetabs=()=>{


props.closetab()

}


    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (

    <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab  label="books" value="1" />
        <Tab label="about online books" value="2" />

      </TabList>
    </Box>
{/* book tabs one */}
    <TabPanel value="1">
        {/* tab books */}
<div className='tab1-container'>

    {/* col-1 */}
<div className='col-11'>
<div className='col-1-tittle'>
<h1>Book Flights  </h1>
</div>
{/* close icon */}
<div className='close-icon-tab1'> <CloseIcon onClick={closetabs} /> </div>

</div>

{/* col-2 tab-book-content */}

<div className='book-content'>
<div className='book-content-container'>


{/* //one */}
<ul className='ul-one'>
<li>Search for a flight</li>
<li>Flight schedules</li>
<li>Featured fares</li>
<li>special offers</li>
<li>best fire finder</li>
<li>emirates vochers</li>

</ul>

{/* //one */}
<ul className='ul-2'>
<li>Search for a flight</li>
<li>Flight schedules</li>
<li>Featured fares</li>
<li>special offers</li>


</ul>

{/* //one */}
<ul className='ul-3'>
<li>Search for a flight</li>


</ul>


{/* //one */}
<ul className='ul-4'>
<li>Search for a flight</li>
<li>Flight schedules</li>


</ul>



</div>






</div>




</div>


    </TabPanel>



{/* book tabs 2 about online*/}

    <TabPanel value="2">
<div className='about-online'>

   {/* col-2 */}
   <div className='col-11'>
<div className='col-1-tittle'>
<h1>emirates fly about online  </h1>
</div>
{/* close icon */}
<div className='close-icon-tab1'> <CloseIcon onClick={closetabs}/> </div>

</div>

<div className='online-content'>
<div className='satir-1'>
<div>seat selection</div>
<div>hold my fire</div>
</div>

<div className='satir-2'>
<div className='satir-1-one'> Emirates best price guarente</div>
<div className='satir-1-to'>Emirates app</div>
</div>




</div>



</div>



    </TabPanel>

  </TabContext>



  )
}

export default Listitem;

