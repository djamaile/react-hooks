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
        if(global.vibe === 'NEUTRAAL'){
            setEten('https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2018/06/18125103/humans-vegetables.jpg?ssl=1?w=356&strip=all&quality=80');
        }else if(global.vibe === 'BOOS'){
            setEten('https://cdn.foodbeast.com/wp-content/uploads/2018/05/Hot-Cheetos-Taco-Shell-01-3.jpg')
        }else if(global.vibe === 'VERDRIETIG'){
            setEten('https://d2gk7xgygi98cy.cloudfront.net/4163-3-large.jpg')
        }else if(global.vibe === 'HAPPY'){
            setEten('https://www.voxweb.nl/wp-content/uploads/2018/01/pizza-3000274_1920.jpg')
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