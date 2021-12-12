import React, { Component } from 'react';
import '../styled/imageSection.css'
class imageSection extends Component {
    render() {
        return (
            <div className='section-container'>

<div className='flex-warper'>


{/* left-side */}


<div className='left-side'>
    <div className='big-image'>

    <h1>big image div here</h1>

<img src="https://c.ekstatic.net/ecl/destinations/middle-east/united-arab-emirates/view-of-dubai-canal-at-sunset-d600x400d.jpg?h=YQdvAXQJNvrKfuEca9BIjw" alt="" />
    </div>

</div>


{/* right-side */}

<div className='right-side'>

<div className='image-one'>
<div className='image-content'>
<h1>image one</h1>

</div>

<img src="https://c.ekstatic.net/ecl/destinations/europe/united-kingdom/thames-river-night-view-with-tower-bridge-d600x400.jpg?h=nFgukqFdPdgg8oQg33WXfg" alt="" />

</div>


<div className='image-2'>
<div className='image-content'>
<h1>image one</h1>
</div>


<img src="https://c.ekstatic.net/ecl/destinations/middle-east/united-arab-emirates/view-of-dubai-canal-at-sunset-d600x400d.jpg?h=YQdvAXQJNvrKfuEca9BIjw" alt="" />
</div>



<div className='image-3'>
<div className='image-content'>
<h1>image one</h1>
</div>


<img src='https://c.ekstatic.net/ecl/destinations/middle-east/united-arab-emirates/view-of-dubai-canal-at-sunset-d600x400d.jpg?h=YQdvAXQJNvrKfuEca9BIjw' alt="" />
</div>


<div className='image-4'>
<div className='image-content'>
<h1>image one</h1>
</div>


<img src='https://c.ekstatic.net/ecl/aircraft-exterior/boeing-777/emirates-boeing-777-300er-flying-above-sea-d600x400.jpg?h=xVDCnzToEwzxjvQouUMazQ' alt="" />
</div>

</div>

</div>




            </div>
        );
    }
}

export default imageSection;