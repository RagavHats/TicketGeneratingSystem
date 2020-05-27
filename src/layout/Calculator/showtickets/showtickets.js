import React from "react";


const showtickets = props => {

    let displayval = props.source;
    let length = displayval.length;

    return (
        <section >
            <h3>Ticktets</h3>
            {displayval}
        </section>
    );
};

export default showtickets;