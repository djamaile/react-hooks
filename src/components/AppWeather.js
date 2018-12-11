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
    const [weer, setWeer] = useState('');
    const [global] = useGlobal();

    function bepaalWeer(){
        if(global.vibe === 'NEUTRAAL'){
            setWeer('https://cdn.fstoppers.com/styles/full/s3/media/2018/09/30/2fda7f65c5721a9acb08975ba10af267.jpg?itok=6xOvJLGJ');
        }else if(global.vibe === 'BOOS'){
            setWeer('https://media.phillyvoice.com/media/images/05152018_lightning_stock_Pexels.2e16d0ba.fill-735x490.jpg');
        }else if(global.vibe === 'VERDRIETIG'){
            setWeer('https://hetstreeknieuws.nl/wp-content/uploads/2018/07/Gladde-wegen-door-regen-door-langdurige-droogte-in-Noord-Nederland.jpg');
        }else if(global.vibe === 'HAPPY'){
            setWeer('https://www.alkmaarsdagblad.nl/image/13627_14653_1200_1200.jpg');
        }
    }

    useEffect(bepaalWeer);

    return(
        <div className="col s6" style={style}>
            <img src={weer} style={imageStyle}/>
        </div>
    );
};