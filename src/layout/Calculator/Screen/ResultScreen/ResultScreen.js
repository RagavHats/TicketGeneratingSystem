import React from 'react';

const resultScreen = (props) => {
    let main_source ;
    let res;
    const reference_variable = props.children;
    const total_count = reference_variable.length;
    if(total_count < 7){
        main_source = reference_variable;
    }else{
        res = reference_variable.substring(0, 6);
    }
    
    return(
        <div>
            <div className="result-screen" >
                {main_source}{res}
            </div>
        </div>
    );    

};


export default resultScreen;