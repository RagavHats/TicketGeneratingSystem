import React from 'react';

import ResultScreen from './ResultScreen/ResultScreen';

const screen = (props) => (
    
    <section className="screen">
        <ResultScreen>{props.equation}</ResultScreen>
        Enter 6 digits 
    </section>
);

export default screen;