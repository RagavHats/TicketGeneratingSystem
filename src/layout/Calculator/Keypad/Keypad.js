import React from 'react';

import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';

const keypad = props => (



    <section className="keypad">

        {/* row #2 */}
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>7</Button>
            <Button onButtonPress={props.onButtonPress}>8</Button>
            <Button onButtonPress={props.onButtonPress}>9</Button>
           
        </KeypadRow>

        {/* row #3 */}
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>4</Button>
            <Button onButtonPress={props.onButtonPress}>5</Button>
            <Button onButtonPress={props.onButtonPress}>6</Button>
            
        </KeypadRow>

        {/* row #4 */}
        <KeypadRow>
            <Button onButtonPress={props.onButtonPress}>1</Button>
            <Button onButtonPress={props.onButtonPress}>2</Button>
            <Button onButtonPress={props.onButtonPress}>3</Button>
            
        </KeypadRow>

        {/* row #5 */}
        <KeypadRow>
             <Button type="primary" onButtonPress={props.onButtonPress}>C</Button>
            <Button onButtonPress={props.onButtonPress}>0</Button>
           
            <Button type="primary" onButtonPress={props.onButtonPress}>&larr;</Button>
        </KeypadRow>
        <KeypadRow>
            <Button type="primary" style={{width:'100%'}} onButtonPress={props.onButtonPress} >+</Button>
            <Button type="primary" style={{width:'100%'}} onButtonPress={props.onButtonPress} >Random</Button>
        </KeypadRow>

    </section>
    
);

export default keypad;