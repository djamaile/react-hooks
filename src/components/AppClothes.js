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
        if(global.vibe === 'neutraal'){
            setKleren('https://ih0.redbubble.net/image.480610600.1388/lh,x2200,grey_lightweight_hoodie,front,man-c,240,152,1000,1000-bg,f8f8f8.lite-3u3.jpg');
        }
    }

    useEffect(bepaalKleding);

    return(
        <div className="col s6" style={style}>
            <img src={kleren} style={imageStyle}/>
        </div>
    );
};