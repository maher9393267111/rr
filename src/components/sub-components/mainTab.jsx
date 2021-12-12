import { useState } from 'react'
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import '../styled/main-tab.css'
import CloseIcon from '@mui/icons-material/Close';
import React, { Component } from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';


export default function MainTab() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };





    return (

        <div className='main-app'>



            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="books" value="1" />
                        <Tab label="about online books" value="2" />
                        <Tab label="covid" value="3" />
                        <Tab label="search" value="4" />

                    </TabList>
                </Box>

                {/* tab one */}

                <TabPanel value="1">

<div className='tab-1-container'>

{/* metin 1 */}

<div className='col-up'>
<div className='col-right'>
visit your covid-19 hub for current destenitions travel advice and more go now
</div>


<div className='col-left'>
    go to covid-19 hub
</div>

</div>

{/* metin 2 */}

<div className='middle-col'>

<div className='flex-middle'>

<div className='middle-left'>
login in to earn and spend alot of money
</div>

<div className='middle-right'>
login in to earn and spend alot of money
</div>

</div>




</div>

{/* metin 3 down */}

<div className='down-section'>

<div className='passengers-section'>

input


</div>






</div>




</div>



                </TabPanel>



                {/* tab 2 */}

                <TabPanel value="2">

                </TabPanel>


                {/* tab 3 */}
                <TabPanel value="3">
hello33
                </TabPanel>


                {/* tab 4 */}
                <TabPanel value="4">

                </TabPanel>


            </TabContext>






        </div>





























    )

}
































