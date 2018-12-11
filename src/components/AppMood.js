import React, { useState, useEffect } from 'react';
import {useGlobal} from 'reactn';

const style={
    margin: 0
};

const imageStyle={
    maxHeight:'100%',
    maxWidth: '100%'
}


export default () => {
    const [mood, setMood] = useState('');
    const [global] = useGlobal();

    function bepaalMood(){
        if(global.vibe === 'neutraal'){
            setMood('http://i.imgur.com/HX1T6r4.jpg');
        }
    }

    useEffect(bepaalMood);

    return(
        <div className="col s6" style={style}>
            <img src={mood} style={imageStyle}/>
        </div>
    );
};