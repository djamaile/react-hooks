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
        if(global.vibe === 'neutraal'){
            setWeer('https://cdn.fstoppers.com/styles/full/s3/media/2018/09/30/2fda7f65c5721a9acb08975ba10af267.jpg?itok=6xOvJLGJ');
        }
    }

    useEffect(bepaalWeer);

    return(
        <div className="col s6" style={style}>
            <img src={weer} style={imageStyle}/>
        </div>
    );
};