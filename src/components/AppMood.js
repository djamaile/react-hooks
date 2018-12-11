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
        if(global.vibe === 'NEUTRAAL'){
            setMood('http://i.imgur.com/HX1T6r4.jpg');
        }else if(global.vibe === 'BOOS'){
            setMood('http://4.bp.blogspot.com/-oS2F5Gq-7DI/UfvY97kRzTI/AAAAAAAAH2g/xvUTHE9vcXc/s1600/mad+person.jpg');
        }else if(global.vibe === 'VERDRIETIG'){
            setMood('https://www.wikihow.com/images/thumb/3/3f/Console-a-Very-Sad-Person-Step-8.jpg/aid322009-v4-728px-Console-a-Very-Sad-Person-Step-8.jpg');
        }else if(global.vibe === 'HAPPY'){
            setMood('https://i.dailymail.co.uk/i/pix/2017/07/18/14/427394C200000578-4707164-Happy_people_are_healthier_Some_65_percent_of_relevant_studies_f-m-21_1500384450707.jpg');
        }
    }

    useEffect(bepaalMood);

    return(
        <div className="col s6" style={style}>
            <img src={mood} style={imageStyle}/>
        </div>
    );
};