import React, { Fragment } from 'react';
import Keuze from './AppVibeKeuze';

export default () => {

    return(
        <Fragment>
            <div className="col s3">
                <Keuze
                    tekst="BOOS"
                    kleur="red"
                />
            </div>
            <div className="col s3">
                <Keuze
                    tekst="VERDRIETIG"
                    kleur="blue"
                />
            </div>
            <div className="col s3">
                <Keuze
                    tekst="HAPPY"
                    kleur="yellow"
                />
            </div>
            <div className="col s3">
                <Keuze
                    tekst="NEUTRAAL"
                    kleur="brown"
                />
            </div>
        </Fragment>
    );
}