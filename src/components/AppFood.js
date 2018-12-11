import React, { Fragment, useState, useEffect } from 'react';
import {useGlobal} from 'reactn';

const style={
    margin: 0
};

const imageStyle={
    maxHeight:'100%',
    maxWidth: '100%'
}

export default () => {
    const [eten, setEten] = useState('');
    const [global] = useGlobal();

    function bepaalEten(){
        if(global.vibe === 'neutraal'){
            setEten('https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2018/06/18125103/humans-vegetables.jpg?ssl=1?w=356&strip=all&quality=80');
        }
    }

    useEffect(bepaalEten);

    return(
        <Fragment>
            <div className="col s6" style={style}>
                <img src={eten} style={imageStyle}/>
            </div>
        </Fragment>
    );
};