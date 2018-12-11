import React from 'react'

export default ({tekst,kleur}) => {

    const keuzeBlokje={
        backgroundColor:`${kleur}`,
        maxWidth:'100%',
        maxHeight:'100%'
    };

    const tekstStyle={
        color:'white',
        textAlign:'center'
    };

    const setVibe = () => {
        alert(`${tekst}`);
    }

    return(
        <div style={keuzeBlokje}>
            <h2 style={tekstStyle} onClick={() => setVibe()}>{tekst}</h2>
        </div>
    );
}; 