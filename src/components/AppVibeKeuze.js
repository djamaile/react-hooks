import React from 'react'
import {useGlobal} from 'reactn';


export default ({tekst,kleur}) => {

    const keuzeBlokje={
        backgroundColor:`${kleur}`,
        maxWidth:'100%',
        maxHeight:'100%'
    };

    const[global,setGlobal]=useGlobal();

    const tekstStyle={
        color:'white',
        textAlign:'center'
    };

    const setVibe = () => {
        setGlobal({
            vibe: `${tekst}`
        });
    }

    return(
        <div style={keuzeBlokje}>
            <h2 style={tekstStyle} onClick={() => setVibe()}>{tekst}</h2>
        </div>
    );
}; 