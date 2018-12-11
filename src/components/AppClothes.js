import React, { useState, useEffect } from 'react';
import {useGlobal} from 'reactn';

const style={
    margin: 0
};

const imageStyle={
    maxHeight:'100%',
    maxWidth: '100%',
    backgroundSize: 'cover'
}



export default () => {
    const [kleren, setKleren] = useState('');
    const [global] = useGlobal();

    function bepaalKleding(){
        if(global.vibe === 'NEUTRAAL'){
            setKleren('https://ih0.redbubble.net/image.480610600.1388/lh,x2200,grey_lightweight_hoodie,front,man-c,240,152,1000,1000-bg,f8f8f8.lite-3u3.jpg');
        }else if(global.vibe === 'BOOS'){
            setKleren('http://www.wholesaleclothing1.com/content/images/thumbs/0007885_wholesale-chiffon-top-s-m-l-6-pcs-1025-red.jpeg');
        }else if(global.vibe === 'VERDRIETIG'){
            setKleren('https://images.vice.com/noisey/content-images/article/met-het-einde-van-cyberia-in-utrecht-is-gothic-officieel-dood-verklaard/ghotic-2.jpg?crop=1xw:0.8430913348946136xh;center,center&resize=1200:*');
        }else if(global.vibe === 'HAPPY'){
            setKleren('https://www.psychologies.co.uk/sites/default/files/styles/psy2_page_header/public/field/image/42-55328187.jpg');
        }
    }

    useEffect(bepaalKleding);

    return(
        <div className="col s6" style={style}>
            <img src={kleren} style={imageStyle}/>
        </div>
    );
};