import React, { Fragment, useEffect } from 'react';
import {useGlobal} from 'reactn';
import Food from './AppFood';
import Weather from './AppWeather';
import Clothes from './AppClothes';
import Mood from './AppMood';
import VibeKeuze from './AppVibe';

const Home = () => {
    const [global] = useGlobal();

    //Dit heeft het zelfde effect al componentDidMount en ComponentDidMount
    useEffect(() => {
        document.title = `${global.applicatie}`;
    });

    const style={
        margin:0
    }

    return(
       <Fragment>
            <div className="container-fluid">
                <div className="row" style={style}>
                    <VibeKeuze/>
                </div>
                <div className="row" style={style}>
                    <Food/>
                    <Weather/>
                </div>
                <div className="row" style={style}>
                    <Clothes/>
                    <Mood/>
                </div>
            </div>
       </Fragment>
    );
}

export default Home;